import { useState, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import sportOptions from "../../consts/fieldConsts"
import fieldsServices from '../../services/field.services'
import uploadServices from "../../services/upload.services"

import FormError from "../FormError/FormError"


const CreateFieldForm = ({ club_id }) => {

    const [fieldData, setFieldData] = useState({
        sport: '',
        hourlyPrice: '',
        maxPlayers: null,
        imageUrl: '',
        timeSlots: [],
        owner: club_id
    })

    const [errors, setErrors] = useState([])
    const [loadingImage, setLoadingImage] = useState(false)

    const sportNames = sportOptions.map((sport) => sport.name)

    const [openHour, setOpenHour] = useState(7)
    const [closeHour, setCloseHour] = useState(23)

    const createHoursArray = (startHour, endHour) => {
        const hoursArray = [];

        for (let i = startHour; i <= endHour; i++) {
            let hourString = i.toString().padStart(2, '0')
            hoursArray.push(hourString + ':00')
        }
        return hoursArray
    }

    const handleInputChange = e => {

        const { value, name } = e.target
        setFieldData({ ...fieldData, [name]: value })
    }

    const handleFieldSubmit = e => {
        e.preventDefault()

        const hoursArray = createHoursArray(openHour, closeHour)

        const updateFieldData = { ...fieldData, timeSlots: hoursArray }

        fieldsServices
            .createField(updateFieldData)
            .then(({ data }) => {
                const max = getMaxPlayersByName(data.sport)
                fieldsServices
                    .addMaxPlayer(data._id, max)
                    .then(({ data }) => {
                        console.log(data)
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
        const sportMax = sportOptions.find((sport) => sport.name === name);
        return sportMax ? sportMax.maxPlayers : null;
    }

    return (

        <Form onSubmit={handleFieldSubmit}>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="sport">
                    <Form.Label>Deporte</Form.Label>
                    <Form.Select name="sport" value={fieldData.sport}
                        onChange={handleInputChange}>
                        {
                            sportNames.map(elm => {
                                return (
                                    <option value={elm}>{elm}</option>
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
                        <option value="7">07:00</option>
                        <option value="8">08:00</option>
                        <option value="9">09:00</option>
                        <option value="10">10:00</option>
                        <option value="11">11:00</option>
                        <option value="12">12:00</option>
                        <option value="13">13:00</option>
                        <option value="14">14:00</option>
                        <option value="15">15:00</option>
                        <option value="16">16:00</option>
                        <option value="17">17:00</option>
                        <option value="18">18:00</option>
                        <option value="19">19:00</option>
                        <option value="20">20:00</option>
                        <option value="21">21:00</option>
                        <option value="22">22:00</option>
                        <option value="23">23:00</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Hora de cierre</Form.Label>
                    <Form.Select as={Col} aria-label="Default select example" value={closeHour}
                        onChange={e => setCloseHour(e.target.value)}>
                        <option value="7">07:00</option>
                        <option value="8">08:00</option>
                        <option value="9">09:00</option>
                        <option value="10">10:00</option>
                        <option value="11">11:00</option>
                        <option value="12">12:00</option>
                        <option value="13">13:00</option>
                        <option value="14">14:00</option>
                        <option value="15">15:00</option>
                        <option value="16">16:00</option>
                        <option value="17">17:00</option>
                        <option value="18">18:00</option>
                        <option value="19">19:00</option>
                        <option value="20">20:00</option>
                        <option value="21">21:00</option>
                        <option value="22">22:00</option>
                        <option value="23">23:00</option>
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

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid mb-4">
                <Button variant="dark" type="submit" size="lg" >Crear Partida</Button>
            </div>

        </Form>
    )
}


export default CreateFieldForm