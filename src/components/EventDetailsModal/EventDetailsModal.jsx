import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import eventsServices from "../../services/events.services"
import { timeEnd } from "../../utils/projectUtils"




const EventDetailsModal = ({ event_id, name, dayText, notes, timeStart, timeText, playMinTotal, players, field, maxPlayer }) => {




    return (

        <Container>

            <Row>

                <Col md={{ span: 6, offset: 1 }}>
                    <h3>Juego de {name}</h3>
                    <p>{notes}</p>
                    <ul>
                        <li>Fecha: {dayText}</li>
                        <li>Horario: {timeStart} - {timeText}</li>
                    </ul>
                    <p><b>Participantes:</b> {players.length}/{maxPlayer}</p>
                    <hr />
                </Col>

                <Col md={{ span: 4 }}>
                    hola
                    {/* <img src={event} style={{ width: '100%' }} /> */}
                </Col>
            </Row>
        </Container>

    )
}

export default EventDetailsModal