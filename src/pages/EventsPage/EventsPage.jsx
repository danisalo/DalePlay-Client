import { useEffect, useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"

import fieldsServices from "../../services/field.services"

import * as projectConsts from "../../consts/projectConsts"

import EventsList from "../../components/EventList/EventList"

import './EventsPage.css'


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
        <div className="pt-4">
            <Container className="pt-4">
                <div className="pt-4">
                    <Row className="align-items-center">
                        <Col md={{ span: 8 }}>
                            <h2 className="text-left mb-4">Partidas Activas</h2>
                        </Col>
                        <Col md={{ span: 2 }}>
                            <Form.Group controlId="sport" className="text-left">
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
                        </Col>
                    </Row>
                    {
                        hasActiveEvents ? <EventsList events={events} />
                            :
                            <div>
                                <h6>No hay partidas programadas de <b>{selectedSport}</b></h6>
                            </div>
                    }
                </div>
            </Container >
        </div >
    )
}


export default EventsPage