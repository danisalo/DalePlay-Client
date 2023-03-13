import { useEffect, useState } from "react"
import { Container, Dropdown } from "react-bootstrap"

// import eventsServices from "../../services/events.services"
import fieldServices from "../../services/field.services"

import Loader from "../../components/Loader/Loader"
import EventsList from "../../components/EventList/EventList"

import './EventsPage.css'


const EventsPage = () => {

    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sport, setSport] = useState()

    useEffect(() => { loadEvents() }, [])

    const loadEvents = () => {
        fieldServices
            .getSports(sport)
            .then(({ data }) => {
                setEvents(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }
    const fireFinalActions = () => {
        loadEvents()
    }

    const handleSportChange = e => {
        console.log(e.target)
    }



    return (
        <div className='pt-5'>
            <Container className='pt-5'>
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <h2>Partida Activas</h2>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    All Sports
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleSportChange} value={'Futbol 5v5'}>FUT 5</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">FUT 7</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">BASKET</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <EventsList events={events} />
                        </>
                }
            </Container>
        </div>
    )
}


export default EventsPage