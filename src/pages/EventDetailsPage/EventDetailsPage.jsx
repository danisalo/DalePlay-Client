import { useState, useEffect } from "react"
import { Button, Col, Container, Row, Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

import Loader from "../../components/Loader/Loader"
import { timeEnd } from "../../utils/projectUtils"
import GoBack from "../../components/GoBack/GoBack"

import eventsServices from "../../services/events.services"
import fieldServices from "../../services/field.services"
import profileServices from "../../services/profile.services"



import './../../components/EventCardProfile/EventCardProfile.css'

const EventDetailsPage = () => {

    const { event_id } = useParams()

    const [event, setEvent] = useState([])
    const [itsField, setItsField] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadEvent()
        // loadUser()
        // parsedDate()
    }, [event_id])

    // const parsedDate = () => {
    //     if (day) {
    //         const date = new Date(day)
    //         const finalDay = date.getDate()
    //         const finalMonth = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date)
    //         const finalYear = date.getFullYear()
    //         let finalDate = `${finalDay} de ${finalMonth} de ${finalYear}`
    //         return setfullDate(finalDate)
    //     }
    // }

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

    // const loadUser = () => {
    //     eventsServices
    //         .getUserEvents(event_id)
    //         .then(({ data }) => {
    //             console.log('NO ARRIESGO', data)
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="pt-4">
            <Container className="pt-4">
                <div className="pt-4">
                    <GoBack />
                    <Row>
                        {
                            isLoading
                                ?
                                <Loader />
                                :
                                <>
                                    <Row id="eventDetails">
                                        <Col md={{ span: 3 }} >
                                            <figure style={{ backgroundImage: `url(${itsField.imageUrl})` }} />
                                        </Col>
                                        <Col md={{ span: 9 }}>
                                            <h3 className="text-left mb-2 mt-2">Juego de {event.name}</h3>
                                            <h6 className="mb-2">{event.notes}</h6>
                                            <div className="mb-4">
                                                <p><b>Fecha:</b> {event.dayText}</p>
                                                <p><b>Horario:</b> {event.timeStart} - {timeEnd(event.timeStart, event.playMinTotal)}</p>
                                                <p><b>Precio:</b> hacer playMinTotal * hourlyPrice</p>
                                                <p><b>Participantes:</b> {event.players.length}/{itsField.maxPlayers}</p>
                                            </div>
                                            <Row>
                                                {
                                                    event.players.map(elm => {
                                                        return (
                                                            <Col key={elm._id}>
                                                                <img className='md-avatar' src={elm.imageUrl} alt={elm.username} />
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Col>
                                    </Row>
                                </>
                        }
                    </Row>
                </div>
            </Container >
        </div >
    )
}

export default EventDetailsPage