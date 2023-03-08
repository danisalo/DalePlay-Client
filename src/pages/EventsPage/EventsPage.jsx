import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import EventsList from "../../components/EventList/EventList"
import Loader from "../../components/Loader/Loader"
import './EventsPage.css'
import eventsServices from "../../services/events.services"


const EventsPage = () => {

    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { loadEvents() }, [])

    const loadEvents = () => {

        eventsServices
            .getEvents()
            .then(({ data }) => {
                setEvents(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadEvents()
    }


    return (
        <>
            <Container>
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <h1>Partida Activas</h1>
                            <hr />
                            <EventsList events={events} />
                        </>
                }
            </Container>
        </>
    )
}


export default EventsPage