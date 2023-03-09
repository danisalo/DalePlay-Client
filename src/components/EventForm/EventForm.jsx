
import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"
import eventsServices from '../../services/events.services'

const EventForm = ({ fireFinalActions }) => {

    const [eventData, setEventData] = useState({
        name: '',
        notes: '',
        timeStart: '',
        playMinTotal: '',
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
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" value={eventData.name} onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="timeStart">
                    <Form.Label>Hora Inicio</Form.Label>
                    <Form.Control type="datetime-local" name="timeStart" value={eventData.timeStart} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="playMinTotal">
                    <Form.Label>Minutos</Form.Label>
                    <Form.Control type="text" name="playMinTotal" value={eventData.playMinTotal} onChange={handleInputChange} />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="notes">
                <Form.Label>Notas</Form.Label>
                <Form.Control type="text" name="notes" value={eventData.notes} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit">Crear partida</Button>
        </Form>
    );
}
export default EventForm