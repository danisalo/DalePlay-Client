import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

import eventsServices from '../../services/events.services'

const CreateEventForm = ({ fireFinalActions, hours, price, maxPlayers, fieldId, sport }) => {

    const total = (hours.length * price)
    const totalMin = (hours.length * 60)
    const start = hours[0]

    const [eventData, setEventData] = useState({
        name: '',
        notes: '',
        cost: total,
        timeSlot: hours,
        timeStart: start,
        playMinTotal: totalMin,
        field: fieldId,
    })

    const handleInputChange = e => {
        const { value, name } = e.target

        setEventData({ ...eventData, [name]: value })
    }

    const handleEventSubmit = e => {
        e.preventDefault()

        eventsServices
            .createEvent(eventData)
            .then(({ data }) => { fireFinalActions() })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleEventSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Partida Deporte de {sport}</Form.Label>
                <Form.Control type="text" name="name" value={eventData.name} onChange={handleInputChange} />
            </Form.Group>

            <p>{sport}</p>

            <Row className="mb-3">
                <p>Horas de Reserva: {hours[0]} {hours[1]}</p>
            </Row>

            <Form.Group className="mb-3" controlId="notes">
                <Form.Label>Notas</Form.Label>
                <Form.Control type="text" name="notes" value={eventData.notes} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit">Reservar</Button>
        </Form>

    )
}
export default CreateEventForm