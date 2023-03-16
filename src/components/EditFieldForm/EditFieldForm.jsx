import { useState, useEffect } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"

import * as projectConsts from "../../consts/projectConsts"
import fieldsServices from '../../services/field.services'
import clubsServices from "../../services/club.services"
import uploadServices from "../../services/upload.services"

import FormError from "../FormError/FormError"


const EditFieldForm = () => {

    const [fieldData, setFieldData] = useState({
        sport: '',
        hourlyPrice: '',
        imageUrl: ''
    })

    const [clubData, setClubData] = useState({})

    const [errors, setErrors] = useState([])
    const [loadingImage, setLoadingImage] = useState(false)
    const navigate = useNavigate()

    const { field_id } = useParams()

    const sportNames = projectConsts.SPORTS_OPTIONS.map((sport) => sport.name)

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

    useEffect(() => {
        loadClubData(field_id)
        loadFieldData(field_id)
    }, [])

    const loadClubData = (field_id) => {
        clubsServices
            .getClubByField(field_id)
            .then(({ data }) => {
                setClubData(data[0]._id)
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const loadFieldData = (field_id) => {
        fieldsServices
            .getOne(field_id)
            .then(({ data }) => { setFieldData(data) })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleFieldSubmit = e => {
        e.preventDefault()

        const hoursArray = createHoursArray(openHour, closeHour)
        const updateFieldData = { ...fieldData, timeSlots: hoursArray }

        fieldsServices
            .editField(field_id, fieldData)
            .then(() => {
                navigate(`/clubs/${clubData}`)
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
                setErrors(err.response.data.errorMessages)
                setLoadingImage(false)
            })
    }

    return (
        <Form onSubmit={handleFieldSubmit}>
            <Row className="mb-2">
                <Form.Group as={Col} controlId="sport">
                    <Form.Label>Deporte</Form.Label>
                    <Form.Select name="sport" value={fieldData.sport}
                        onChange={handleInputChange} disabled='true'>
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
            <Row className="mb-2">
                <Form.Group as={Col}>
                    <Form.Label>Hora de apertura</Form.Label>
                    <Form.Select as={Col} aria-label="Default select example" value={openHour}
                        onChange={e => setOpenHour(e.target.value)}>
                        {
                            projectConsts.SCHEDULE_OPTIONS.map(elm => {
                                return (
                                    <option value={elm.value}>{elm.name}</option>
                                )
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Hora de cierre</Form.Label>
                    <Form.Select as={Col} aria-label="Default select example" value={closeHour}
                        onChange={e => setCloseHour(e.target.value)}>
                        {
                            projectConsts.SCHEDULE_OPTIONS.map(elm => {
                                return (
                                    <option value={elm.value}>{elm.name}</option>
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
            <Form.Group className="mb-2" controlId="image">
                <Form.Label>Foto del campo</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid mt-4">
                <Button variant="DPmain" type="submit" size="lg" >Guardar Cambios</Button>
            </div>
        </Form>
    )
}


export default EditFieldForm