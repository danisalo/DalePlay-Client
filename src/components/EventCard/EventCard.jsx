import { useEffect, useState } from "react"
import { Card, Button, Modal } from "react-bootstrap"
import { Link } from 'react-router-dom'

import eventsServices from '../../services/events.services'
import fieldsServices from "../../services/field.services"
import { timeEnd } from "../../utils/projectUtils"
import EventDetailsModal from "../EventDetailsModal/EventDetailsModal"

import './EventCard.css'

function EventCard({ _id, name, dayText, notes, timeStart, playMinTotal, players, field }) {


    const [maxPlayer, setMaxPlayer] = useState()

    const [isFull, setIsFull] = useState(false)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    useEffect(() => {
        getMaxPlayers()
        gameFull()
    }, [field])


    const getMaxPlayers = () => {
        fieldsServices
            .getOne(field)
            .then(({ data }) => {
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

    const fireJoinActions = () => {
        handleJoinSubmit()
        handleClose()
    }

    const handleJoinSubmit = () => {


        eventsServices
            .joinEvent(_id)
            .catch(err => console.log(err))
    }

    const timeText = timeEnd(timeStart, playMinTotal)

    return (
        <>
            <Link onClick={handleShow}>
                <Card className="mb-4 EventCard">
                    <Card.Body className='d-flex flex-column justify-content-between'>
                        <div>
                            <h4>{name}</h4>
                            <p>{dayText}</p>
                            <p>{timeStart} - {timeText}</p>
                            <p className='textOverflow'>{notes}</p>
                        </div>
                        <div>
                            <Button variant="DPmain" onClick={handleShow}>Ver Detalles</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Link >


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles de la partida</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EventDetailsModal event_id={_id} name={name} notes={notes} timeStart={timeStart} timeText={timeText} playMinTotal={playMinTotal} players={players} field={field} maxPlayer={maxPlayer} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={fireJoinActions}>
                        Unirme
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EventCard