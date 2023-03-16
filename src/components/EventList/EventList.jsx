import { Row, Col } from "react-bootstrap"

import EventCard from "../EventCard/EventCard"

import './EventList.css'


const EventsList = ({ events, getFilteredEvents }) => {

    return (
        <Row className="mt-2 mb-2">
            {
                events.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <EventCard {...elm} getFilteredEvents={getFilteredEvents} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default EventsList
