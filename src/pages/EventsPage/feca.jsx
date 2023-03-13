import { useEffect, useState } from "react"
import { Container, Dropdown } from "react-bootstrap"

import fieldServices from "../../services/field.services"

import Loader from "../../components/Loader/Loader"
import EventsList from "../../components/EventList/EventList"

import './EventsPage.css'

const EventsPage = () => {
    const [fields, setFields] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [selectedSport, setSelectedSport] = useState(null)

    useEffect(() => { loadFields() }, [])

    const loadFields = () => {
        return fieldServices
            .getSports(sport)
            .then(({ data }) => {
                setFields(data)
                setSelectedSport(data[0].sport)
                console.log(`log data: ${data}`)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleSportChange = event => {
        setSelectedSport(event.target.value)
    }

    const getFilteredEvents = () => {
        if (!selectedSport) {
            return events
        }

        const selectedField = fields.find(field => field.sport === selectedSport)

        if (!selectedField) {
            return []
        }

        return selectedField.events
    }

    const renderSportOptions = () => {
        return fields.map(field => (
            <Dropdown.Item key={field.sport} value={field.sport}>
                {field.sport}
            </Dropdown.Item >
        ))
    }

    const filteredEvents = getFilteredEvents();

    return (
        <div className="pt-5">
            <Container className="pt-5">
                {
                    isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <h2>Partidas Activas</h2>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    {selectedSport || "Todos los deportes"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item value={null} onClick={handleSportChange}>
                                        Todos los deportes
                                    </Dropdown.Item>
                                    {renderSportOptions()}
                                </Dropdown.Menu>
                            </Dropdown>
                            <EventsList events={filteredEvents} />
                        </>
                    )}
            </Container>
        </div>
    )
}


export default EventsPage