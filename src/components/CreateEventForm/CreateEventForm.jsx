import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

import eventsServices from '../../services/events.services'
import fieldsServices from "../../services/field.services"

import FormError from "../FormError/FormError"


const CreateEventForm = ({ fireFinalActions, hours, price, maxPlayers, fieldId, sport, day }) => {

    const total = (hours.length * price)
    const totalMin = (hours.length * 60)
    const start = hours[0]
    const reserveDay = day
    const fi = fieldId

    const [eventData, setEventData] = useState({
        name: sport,
        notes: '',
        cost: total,
        timeSlot: hours,
        timeStart: start,
        playMinTotal: totalMin,
        field: fi,
        day: reserveDay
    })

    const [errors, setErrors] = useState([])

    const handleInputChange = e => {
        const { value, name } = e.target
        setEventData({ ...eventData, [name]: value })
    }

    const handleEventSubmit = e => {
        e.preventDefault()

        eventsServices
            .createEvent(eventData)
            .then(({ data }) => {
                const eventId = data._id
                fieldsServices
                    .addEvent(fi, eventId)
                    .then(({ data }) => {
                        fireFinalActions()
                    })
                    .catch(err => setErrors(err.response.data.errorMessages))
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleEventSubmit}>
            <Row>
                <Col>
                    <p>Reserva de {sport}</p>
                </Col>
                <Col>
                    <p>{day}</p>
                </Col>
            </Row>
            <p></p>

            <Row className="mb-4">
                <p>Horas de Reserva: {hours.map(elm => <p>{elm}</p>)}</p>

            </Row>

            <Form.Group className="mb-4" controlId="notes">
                <Form.Label>Notas</Form.Label>
                <Form.Control type="text" name="notes" value={eventData.notes} onChange={handleInputChange} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid mb-4">
                <Button variant="dark" type="submit" size="lg" >Reservar</Button>
            </div>

        </Form>
    )
}


export default CreateEventForm