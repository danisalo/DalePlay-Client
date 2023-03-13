import { useEffect, useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

import FormError from "../FormError/FormError"

import eventsServices from '../../services/events.services'
import fieldsServices from "../../services/field.services"

const CreateEventForm = ({ fireFinalActions, sport, hours, price, maxPlayers, fieldId, date }) => {

    const total = (hours.length * price)
    const totalMin = (hours.length * 60)
    const start = hours[0]
    const reserveDay = date
    const fi = fieldId

    console.log('Aqui RESERVEEEE', reserveDay)

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


    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']

    const parts = reserveDay.toString().split(' ')

    const dia = days[date.getDay()]
    const mes = months[date.getMonth()]
    const year = parts[3]

    console.log(`${dia}, ${parts[2]} de ${mes} de ${year}`);


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
                    .catch(err => console.log(err))
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

            {/* {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>} */}

            <div className="d-grid mb-4">
                <Button variant="dark" type="submit" size="lg" >Reservar</Button>
            </div>

        </Form>
    )
}


export default CreateEventForm