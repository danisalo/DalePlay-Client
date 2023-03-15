import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

import eventsServices from '../../services/events.services'
import fieldsServices from "../../services/field.services"

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

    console.log('max de jugadores es', maxPlayer)

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
                    <p>Jugadores inscritos: {players.length} | Max Jugadores: {maxPlayer}</p>
                    {
                        !isFull
                            ?
                            <p>Aún hay hueco</p>
                            :
                            <p>No hay espacio</p>
                    }
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