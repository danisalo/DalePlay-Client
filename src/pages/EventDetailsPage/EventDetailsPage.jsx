import { useState, useEffect } from "react"
import { Col, Container, Row, Stack } from "react-bootstrap"
import { useParams } from "react-router-dom"

import Loader from "../../components/Loader/Loader"
import { timeEnd } from "../../utils/projectUtils"
import GoBack from "../../components/GoBack/GoBack"

import eventsServices from "../../services/events.services"
import fieldServices from "../../services/field.services"



import './../../components/EventCardProfile/EventCardProfile.css'

const EventDetailsPage = () => {

    const { event_id } = useParams()

    const [event, setEvent] = useState([])
    const [itsField, setItsField] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadEvent()
    }, [event_id])

    console.log('aqui estan los players', itsField)


    const loadEvent = () => {

        eventsServices
            .getOne(event_id)
            .then(({ data }) => {
                setEvent(data)
                fieldServices
                    .getOne(data.field)
                    .then(({ data }) => {
                        setItsField(data)
                        setIsLoading(false)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="pt-4">
            <Container className="pt-4">
                <div className="pt-4">

                    {
                        isLoading
                            ?
                            <Loader />
                            :

                            <>
                                <GoBack />
                                <Row id="eventDetails">
                                    <Col md={{ span: 4 }} >
                                        <figure style={{ backgroundImage: `url(${itsField.imageUrl})` }} />
                                    </Col>
                                    <Col md={{ span: 8 }}>
                                        <Stack gap={1}>
                                            <h3 className="text-left mb-2 mt-2">Juego de {event.name}</h3>
                                            <h6 className="mb-2">{event.notes}</h6>
                                        </Stack>
                                        <Stack className="mb-4" gap={2}>
                                            <p><b>Fecha:</b> {event.dayText}</p>
                                            <p><b>Horario:</b> {event.timeStart} - {timeEnd(event.timeStart, event.playMinTotal)}</p>
                                            <p><b>Precio:</b> hacer playMinTotal * hourlyPrice</p>
                                            <p><b>Participantes:</b> {event.players.length}/{itsField.maxPlayers}</p>
                                        </Stack>
                                        <Stack direction="horizontal" gap={3}>
                                            {
                                                event.players.map(elm => {
                                                    return (

                                                        <img key={elm._id} className='md-avatar' src={elm.imageUrl} alt={elm.username} />

                                                    )
                                                })
                                            }
                                        </Stack>

                                    </Col>
                                </Row>
                            </>
                    }

                </div>
            </Container >
        </div >
    )
}

export default EventDetailsPage