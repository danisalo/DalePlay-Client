import { useEffect, useState } from "react"
import { Container, Col, Form } from "react-bootstrap"

import fieldServices from "../../services/field.services"

import Loader from "../../components/Loader/Loader"
import EventsList from "../../components/EventList/EventList"

import './EventsPage.css'
import eventsServices from "../../services/events.services"
import fieldsServices from "../../services/field.services"

const EventsPage = () => {
    const [fields, setFields] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    const [selectedSport, setSelectedSport] = useState()

    // useEffect(() => { loadFields() }, [])

    // const loadFields = () => {
    //     return fieldServices
    //         .getSports(sport)
    //         .then(({ data }) => {
    //             setFields(data)
    //             setSelectedSport(data[0].sport)
    //             console.log(`log data: ${data}`)
    //             setIsLoading(false)
    //         })
    //         .catch(err => console.log(err))
    // }

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
                console.log('data antes del set', data[0].events)
                setFields(data[0].events)
            })
            .catch(err => console.log(err))
    }

    const sportOptions = ['Futbol 5v5', 'Futbol 7v7', 'Futbol 11v11', 'Volleyball 6v6', 'Baloncesto 3v3', 'Baloncesto 5v5', 'Padel 1v1', 'Padel 2v2', 'Tennis 1v1', 'Tennis 2v2']
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
                            {
                                sportOptions.map(elm => {
                                    return (
                                        <option value={elm}>{elm}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <EventsList events={fields} />
                </>
                {/* )} */}
            </Container>
        </div>
    )
}


export default EventsPage