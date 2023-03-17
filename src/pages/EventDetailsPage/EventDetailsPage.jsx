import { useState, useEffect } from "react"
import { Col, Container, Row, Stack } from "react-bootstrap"
import { useParams } from "react-router-dom"

import Loader from "../../components/Loader/Loader"
import { timeEnd, totalPrice, parsedDate } from "../../utils/projectUtils"
import GoBack from "../../components/GoBack/GoBack"

import eventsServices from "../../services/events.services"
import fieldServices from "../../services/field.services"
import clubsServices from "../../services/club.services"

import './../../components/EventCardProfile/EventCardProfile.css'
import './EventDetailsPage.css'


const EventDetailsPage = () => {

    const { event_id } = useParams()

    const [event, setEvent] = useState([])
    const [itsField, setItsField] = useState([])
    const [club, setClub] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadEvent()
    }, [event_id])



    const loadEvent = () => {

        eventsServices
            .getOne(event_id)
            .then(({ data }) => {
                setEvent(data)

                fieldServices
                    .getOne(data.field)
                    .then(({ data }) => {
                        setItsField(data)

                        clubsServices
                            .getClubByField(data._id)
                            .then(({ data }) => {
                                setClub(data[0])
                                setIsLoading(false)
                            })
                            .catch(err => console.log(err))

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
                                <Row>
                                    <Col md={{ span: 4 }} >
                                        <figure id="eventDetails">
                                            <img src={itsField.imageUrl} alt="" />
                                        </figure>
                                    </Col>
                                    <Col md={{ span: 8 }}>
                                        <Stack gap={1}>
                                            <h3 className="text-left mb-2 mt-2">Juego de {event.name}</h3>
                                            <p style={{ color: "grey" }}>{club.name}</p>
                                            <h6 >{event.notes}</h6>
                                        </Stack>
                                        <hr />
                                        <Stack className="mb-4" gap={2}>
                                            <p><b>Fecha:</b> {parsedDate(event.day)}</p>
                                            <p><b>Horario:</b> {event.timeStart} - {timeEnd(event.timeStart, event.playMinTotal)}</p>
                                            <p><b>Precio:</b> {totalPrice(event?.playMinTotal, itsField?.hourlyPrice)}</p>
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