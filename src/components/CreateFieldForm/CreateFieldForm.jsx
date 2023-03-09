import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

import fieldsServices from '../../services/field.services'

const CreateFieldForm = ({ club_id }) => {

    const [fieldData, setFieldData] = useState({
        sport: '',
        hourlyPrice: '',
        maxPlayers: '',
        imageUrl: '',
        timeSlots: [],
        owner: club_id
    })

    const sportOptions = ['Futbol-5', 'Futbol-7', 'Futbol-11', 'Volleyball-6', 'Baloncesto-3', 'Baloncesto-5', 'Padel-2', 'Padel-4', 'Tennis-2', 'Tennis-4']

    const [value1, setValue1] = useState(7)
    const [value2, setValue2] = useState(23)

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

        const hoursArray = createHoursArray(value1, value2)

        const updateFieldData = {
            ...fieldData,
            timeSlots: hoursArray
        }

        fieldsServices
            .createField(updateFieldData)
            .then(({ data }) => { console.log(data) })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleFieldSubmit}>

            <Form.Group className="mb-4" controlId="sport">
                <Form.Label>Deporte:</Form.Label>
                <Form.Select name="sport" value={fieldData.sport}
                    onChange={handleInputChange}>
                    {
                        sportOptions.map(elm => {
                            return (
                                <option value={elm}>{elm}</option>
                            )
                        })
                    }
                </Form.Select>
            </Form.Group>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="hourlyPrice">
                    <Form.Label>Precio por hora</Form.Label>
                    <Form.Control type="text" name="hourlyPrice" value={fieldData.hourlyPrice} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="maxPlayers">
                    <Form.Label>Máximo de jugadores</Form.Label>
                    <Form.Control type="text" name="maxPlayers" value={fieldData.maxPlayers} onChange={handleInputChange} />
                </Form.Group>
            </Row>
            <Form.Group className="mb-4" controlId="imageUrl">
                <Form.Label>Foto:</Form.Label>
                <Form.Control type="text" name="imageUrl" value={fieldData.imageUrl} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
                <Form.Select aria-label="Default select example" value={value1}
                    onChange={e => setValue1(e.target.value)}>
                    <option value="7">07:00</option>
                    <option value="8">08:00</option>
                    <option value="9">09:00</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" value={value2}
                    onChange={e => setValue2(e.target.value)}>
                    <option value="24">24:00</option>
                    <option value="23">23:00</option>
                    <option value="22">22:00</option>
                    <option value="22">21:00</option>
                </Form.Select>
            </Form.Group>

            <Button variant="dark" type="submit" size="lg">Crear partida</Button>

        </Form>
    )
}

export default CreateFieldForm