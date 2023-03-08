import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import fieldsServices from '../../services/field.services'

const FieldForm = () => {

    const [fieldData, setFieldData] = useState({
        sport: '',
        hourlyPrice: '',
        maxPlayers: '',
        imageUrl: '',
        timeSlots: [],
    })

    const [value1, setValue1] = useState(2);
    const [value2, setValue2] = useState(0);

    const handleInputChange = e => {
        const { value, name } = e.target
        setFieldData({ ...fieldData, [name]: value })
    }

    const handleFieldSubmit = e => {
        e.preventDefault()

        fieldsServices
            .createField(fieldData)
            .then(({ data }) => { console.log(data) })
            .catch(err => console.log(err))
    }



    return (

        <Form onSubmit={handleFieldSubmit}>
            <Form.Group className="mb-3" controlId="sport">
                <Form.Label>Cancha Deportiva:</Form.Label>
                <Form.Control type="text" name="sport" value={fieldData.sport} onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="hourlyPrice">
                    <Form.Label>Precio por hora</Form.Label>
                    <Form.Control type="text" name="hourlyPrice" value={fieldData.hourlyPrice} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="maxPlayers">
                    <Form.Label>Máximo de jugadores</Form.Label>
                    <Form.Control type="text" name="maxPlayers" value={fieldData.maxPlayers} onChange={handleInputChange} />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="imageUrl">
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


            <Button variant="dark" type="submit">Crear partida</Button>
        </Form>)
}

export default FieldForm