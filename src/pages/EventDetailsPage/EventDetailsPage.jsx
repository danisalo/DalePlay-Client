import { useState, useEffect } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import eventsServices from "../../services/events.services"
import { timeEnd } from "../../utils/projectUtils"




const EventDetailsPage = () => {

    const { event_id } = useParams()

    const [event, setEvent] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { loadEvent() }, [])


    const loadEvent = () => {

        eventsServices
            .getOne(event_id)
            .then(({ data }) => {
                setEvent(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }
    return (


        <Container>
            <h6>Detalles de la partida</h6>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <Row>

                        <Col md={{ span: 6, offset: 1 }}>
                            <h3>Juego de {event.name}</h3>
                            <p>{event.notes}</p>
                            <ul>
                                <li>Fecha: {event.dayText}</li>
                                <li>Horario: {event.timeStart} - {timeEnd(event.timeStart, event.playMinTotal)}</li>
                            </ul>
                            <hr />

                            <Link to="/galeria">
                                <Button as="figure" variant="dark">Volver</Button>
                            </Link>
                        </Col>

                        <Col md={{ span: 4 }}>
                            <img src={event} style={{ width: '100%' }} />
                        </Col>

                    </Row>}
        </Container>

    )
}

export default EventDetailsPage