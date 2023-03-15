import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

import eventsServices from '../../services/events.services'
import fieldsServices from "../../services/field.services"
import { timeEnd } from "../../utils/projectUtils"

import './EventCard.css'

function EventCard({ _id, name, notes, timeStart, playMinTotal, players, field }) {

    const [maxPlayer, setMaxPlayer] = useState()

    const [isFull, setIsFull] = useState(false)


    useEffect(() => {
        getMaxPlayers()
        gameFull()
    }, [field])


    const getMaxPlayers = () => {
        fieldsServices
            .getOne(field)
            .then(({ data }) => {
                console.log(data)
                setMaxPlayer(data.maxPlayers)
            })
            .catch(err => console.log(err))
    }

    const gameFull = () => {
        if (players.length === maxPlayer) {
            setIsFull(true)
        }
        setIsFull(false)
    }

    const handleJoinSubmit = e => {
        e.preventDefault()

        eventsServices
            .joinEvent(_id)
            .then(({ data }) => { console.log(data) })
            .catch(err => console.log(err))
    }

    return (
        <Link to={`/evento/${_id}`}>
            <Card className="mb-4 EventCard">
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <h4>{name}</h4>
                        <p>{timeStart} - {timeEnd(timeStart, playMinTotal)}</p>
                        <p className='textOverflow'>{notes}</p>
                    </div>
                    <div className="d-grid">
                        <Button variant="DPmain">Ver Detalles</Button>
                    </div>
                </Card.Body>
            </Card>
        </Link >
    )
}

export default EventCard