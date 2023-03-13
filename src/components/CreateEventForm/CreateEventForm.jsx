import { useEffect, useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

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


    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']

    const parts = reserveDay.toString().split(' ')

    const dia = dias[date.getDay()]
    const mes = meses[date.getMonth()]
    const year = parts[3]

    // Log the day, month, and year in Spanish format
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
                fieldsServices
                    .addEvent(fi, data._id)
                    .then(({ data }) => { fireFinalActions() })
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

            <Row className="mb-3">
                <p>{dia}, {parts[2]} de {mes} de {year}</p>
                <p>Horas de Reserva: {hours.map(elm => <p>{elm}</p>)}</p>

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