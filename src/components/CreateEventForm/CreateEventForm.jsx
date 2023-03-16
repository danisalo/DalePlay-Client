import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

import FormError from "../FormError/FormError"

import eventsServices from '../../services/events.services'
import fieldsServices from "../../services/field.services"


const CreateEventForm = ({ fireFinalActions, sport, hours, price, maxPlayers, fieldId, date, dayText }) => {

    const total = (hours.length * price)
    const totalMin = (hours.length * 60)
    const start = hours[0]
    const reserveDay = date
    const fi = fieldId
    const dayT = dayText

    const [eventData, setEventData] = useState({
        name: sport,
        notes: '',
        cost: total,
        timeSlot: hours,
        timeStart: start,
        playMinTotal: totalMin,
        field: fi,
        day: reserveDay,
        dayText: dayT
    })

    const [errors, setErrors] = useState([])

    const parts = reserveDay.toString().split(' ')

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
                    .then(() => {
                        fireFinalActions()
                    })
                    .catch(err => setErrors(err.response.data.errorMessages))
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    return (
        <Form onSubmit={handleEventSubmit}>
            <Row className="mb-4">
                <h5 className="mb-2">Horas de Reserva:</h5>
                {hours.map(elm => <h6 className="mb-2">{elm}</h6>)}
            </Row>

            <Form.Group className="mb-4" controlId="notes">
                <Form.Label><h5>Notas de la partida</h5></Form.Label>
                <Form.Control as="textarea" rows={3} type="text" name="notes" value={eventData.notes} onChange={handleInputChange} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid">
                <Button variant="DPmain" type="submit" size="lg">Reservar</Button>
            </div>
        </Form>
    )
}


export default CreateEventForm