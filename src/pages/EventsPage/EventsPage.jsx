import { useEffect, useState } from "react"
import { Container, Col, Form } from "react-bootstrap"

import Loader from "../../components/Loader/Loader"
import eventsServices from "../../services/events.services"
import fieldsServices from "../../services/field.services"

import EventsList from "../../components/EventList/EventList"

import './EventsPage.css'
import eventsServices from "../../services/events.services"
import fieldsServices from "../../services/field.services"
import * as projectConsts from "../../consts/projectConsts"


const EventsPage = () => {
    const [events, setEvents] = useState([])
    const [hasActiveEvents, setHasActiveEvents] = useState(false)
    const [selectedSport, setSelectedSport] = useState()

    const handleInputChange = event => {
        setSelectedSport(event.target.value)
    }

    useEffect(() => {
        selectedSport && getFilteredEvents()
    }, [selectedSport])

    const getFilteredEvents = () => {

        fieldsServices
            .getSports(selectedSport)
            .then(({ data }) => {

                if (data.length === 0) {
                    setHasActiveEvents(false)
                }
                else {

                    function filterByDay(elm) {
                        const today = new Date()
                        const eventDay = new Date(elm.day)
                        today.setHours(2)
                        today.setMinutes(0)
                        today.setSeconds(0)
                        today.setMilliseconds(0)
                        if (eventDay.getTime() >= today.getTime()) {
                            return true
                        }
                        return false
                    }

                    const filteredEvents = data.filter(filterByDay)

                    if (filteredEvents.length === 0) {
                        setHasActiveEvents(false)
                    }
                    else {
                        setHasActiveEvents(true)
                        setEvents(filteredEvents)
                    }

                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="pt-5">
            <Container className="pt-5">
                {/* {
                    isLoading ? (
                        <Loader />
                    ) : ( */}
                <>
                    <h2>Partidas Activas</h2>
                    <Form.Group as={Col} controlId="sport">
                        <Form.Label>Deporte</Form.Label>
                        <Form.Select name="sport" value={selectedSport}
                            onChange={handleInputChange}>
                            <option>Elige un deporte</option>
                            {

                                projectConsts.SPORTS_OPTIONS.map(elm => {
                                    return (

                                        <option value={elm.value}>{elm.name}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    {
                        hasActiveEvents ? <EventsList events={events} /> : <p>No hay partidas programadas</p>
                    }


                </>
                {/* )} */}
            </Container>
        </div>
    )
}


export default EventsPage