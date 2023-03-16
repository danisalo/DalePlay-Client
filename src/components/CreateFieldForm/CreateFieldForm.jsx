import { useState, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

import * as projectConsts from "../../consts/projectConsts"
import clubsServices from "../../services/club.services"
import fieldsServices from '../../services/field.services'
import uploadServices from "../../services/upload.services"

import FormError from "../FormError/FormError"


const CreateFieldForm = ({ fireFinalActions, club_id }) => {

    const [fieldData, setFieldData] = useState({
        sport: '',
        hourlyPrice: '',
        maxPlayers: '',
        imageUrl: '',
        timeSlots: [],
    })

    const [errors, setErrors] = useState([])
    const [loadingImage, setLoadingImage] = useState(false)
    const [openHour, setOpenHour] = useState()
    const [closeHour, setCloseHour] = useState()

    const sportNames = projectConsts.SPORTS_OPTIONS.map((sport) => sport.name)

    const createHoursArray = (startHourStr, endHourStr) => {
        const startHour = parseInt(startHourStr, 10)
        const endHour = parseInt(endHourStr, 10)
        const hoursArray = Array(endHour - startHour + 1)
            .fill()
            .map((_, index) => {
                const hour = startHour + index;
                const hourString = `${hour.toString().padStart(2, '0')}:00`;
                return hourString
            })
        return hoursArray
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setFieldData({ ...fieldData, [name]: value })
    }

    useEffect(() => {
        if (openHour && closeHour) { setFieldData({ ...fieldData, timeSlots: createHoursArray(openHour, closeHour) }) }
    }, [openHour, closeHour])


    const handleFieldSubmit = e => {

        e.preventDefault()

        fieldsServices
            .createField(fieldData)
            .then(({ data }) => {

                const max = getMaxPlayersByName(data.sport)

                fieldsServices

                    .addMaxPlayer(data._id, max)
                    .then(({ data }) => {

                        clubsServices
                            .addToClub(club_id, data._id)
                            .then((data) => fireFinalActions())
                            .catch(err => setErrors(err.response.data.errorMessages))

                    })
                    .catch(err => setErrors(err.response.data.errorMessages))
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setFieldData({ ...fieldData, imageUrl: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                setLoadingImage(false)
            })
    }

    const getMaxPlayersByName = (name) => {
        const sportMax = projectConsts.SPORTS_OPTIONS.find((sport) => sport.name === name);
        return sportMax.maxPlayers
    }

    return (

        <Form onSubmit={handleFieldSubmit}>

            <Row className="mb-4">
                <Form.Group controlId="sport">
                    <Form.Label>Deporte</Form.Label>
                    <Form.Select name="sport" value={fieldData.sport}
                        onChange={handleInputChange}>
                        <option>Elige un deporte</option>
                        {
                            sportNames.map(elm => {
                                return (
                                    <option key={elm} value={elm}>{elm}</option>
                                )
                            })
                        }
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col}>
                    <Form.Label>Hora de apertura</Form.Label>
                    <Form.Select as={Col} aria-label="Default select example" value={openHour}
                        onChange={e => setOpenHour(e.target.value)}>
                        <option>Elige la hora de apertura</option>
                        {
                            projectConsts.SCHEDULE_OPTIONS.map(elm => {
                                return (
                                    <option value={elm.value} key={elm.value}>{elm.name}</option>
                                )
                            })
                        }

                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Hora de cierre</Form.Label>
                    <Form.Select as={Col} aria-label="Default select example" value={closeHour}
                        onChange={e => setCloseHour(e.target.value)}>
                        <option>Elige la hora de cierre</option>
                        {
                            projectConsts.SCHEDULE_OPTIONS.map(elm => {
                                return (
                                    <option value={elm.value} key={elm.value}>{elm.name}</option>
                                )
                            })
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="hourlyPrice">
                    <Form.Label>Precio por hora</Form.Label>
                    <Form.Control type="text" name="hourlyPrice" value={fieldData.hourlyPrice} onChange={handleInputChange} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-4" controlId="image">
                <Form.Label>Foto del campo</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm}>{elm}</p>)}</FormError>}

            <div className="d-grid mb-4">
                <Button variant="DPmain" type="submit" size="lg" disabled={loadingImage}>Crear Partida</Button>
            </div>

        </Form>
    )
}


export default CreateFieldForm