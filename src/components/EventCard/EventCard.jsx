import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

import eventsServices from '../../services/events.services'

import './EventCard.css'


function EventCard({ _id, name, notes, timeStart, playMinTotal }) {

    const handleJoinSubmit = e => {
        e.preventDefault()

        eventsServices
            .joinEvent(_id)
            .then(({ data }) => { console.log(data) })
            .catch(err => console.log(err))
    }

    const timeEnd = (timeStart, playMinTotal) => {
        const [startHours, startMinutes] = timeStart.split(":").map(Number)

        const endMinutes = startMinutes + playMinTotal
        const endHours = startHours + Math.floor(endMinutes / 60)

        const finalEndMinutes = endMinutes % 60
        const finalEndHours = String(endHours).padStart(2, "0")
        const finalEndTime = `${finalEndHours}:${finalEndMinutes.toString().padStart(2, "0")}`

        return finalEndTime
    }

    return (
        <>
            <Card className="mb-4 EventCard">
                <Card.Body>
                    <h3>{name}</h3>
                    <p>{timeStart} - {timeEnd(timeStart, playMinTotal)}</p>
                    <p>{notes}</p>
                    <Link to={`/event/${_id}`} className="d-grid mb-2">
                        <Button variant="DPmain">Ver Detalles</Button>
                    </Link>
                    <div className="d-grid">
                        <Button variant="DPmain" onClick={handleJoinSubmit} >Unirme</Button>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default EventCard