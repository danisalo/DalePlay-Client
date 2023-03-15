import { useEffect, useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

import FormError from "../FormError/FormError"

import eventsServices from '../../services/events.services'
import fieldsServices from "../../services/field.services"

import * as projectConsts from './../../consts/projectConsts'


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

    const dia = projectConsts.DAYS[date.getDay()]
    const mes = projectConsts.MONTHS[date.getMonth()]
    const year = parts[3]

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
            </Row>
            <Row className="mb-4">
                <p>Horas de Reserva: {hours.map(elm => <p>{elm}</p>)}</p>
            </Row>

            <Form.Group className="mb-4" controlId="notes">
                <Form.Label>Notas</Form.Label>
                <Form.Control type="text" name="notes" value={eventData.notes} onChange={handleInputChange} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid mb-4">
                <Button variant="DPmain" type="submit" size="lg" >Reservar</Button>
            </div>
        </Form>
    )
}


export default CreateEventForm