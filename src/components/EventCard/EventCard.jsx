import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

import eventsServices from '../../services/events.services'
import { timeEnd } from "../../utils/projectUtils"

import './EventCard.css'


function EventCard({ _id, name, notes, timeStart, playMinTotal }) {

    const handleJoinSubmit = e => {
        e.preventDefault()

        eventsServices
            .joinEvent(_id)
            .then(({ data }) => { console.log(data) })
            .catch(err => console.log(err))
    }

    return (
        <Link to={`/event/${_id}`}>
            <Card className="mb-4 EventCard">
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <h4>{name}</h4>
                        <p>{timeStart} - {timeEnd(timeStart, playMinTotal)}</p>
                        <p className='textOverflow'>{notes}</p>
                    </div>
                    <div>
                        <Link to={`/event/${_id}`} className="d-grid">
                            <Button variant="DPmain">Ver Detalles</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Link >
    )
}

export default EventCard