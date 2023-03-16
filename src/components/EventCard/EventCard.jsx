import { useEffect, useState } from "react"
import { Card, Button, Modal, Stack } from "react-bootstrap"
import { Link } from 'react-router-dom'
import clubsServices from "../../services/club.services"

import eventsServices from '../../services/events.services'
import fieldsServices from "../../services/field.services"
import { timeEnd } from "../../utils/projectUtils"
import EventDetailsModal from "../EventDetailsModal/EventDetailsModal"

import './EventCard.css'

function EventCard({ _id, name, day, notes, timeStart, playMinTotal, players, field }) {

    const [maxPlayer, setMaxPlayer] = useState()
    const [club, setClub] = useState([])

    const [isFull, setIsFull] = useState(false)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    useEffect(() => {
        getMaxPlayers()
        gameFull()
        getDataClub()
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

    const getDataClub = () => {
        clubsServices
            .getClubByField(field)
            .then(({ data }) => {
                setClub(data[0])
            })
            .catch(err => console.log(err))
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
                            <h4 className="mb-2 text-left">{name}</h4>
                            <p className="mb-2">{club.name}</p>
                            <Stack>
                                <p className="mb-1"><b>Horario:</b> {timeStart} - {timeEnd(timeStart, playMinTotal)}</p>
                                <p className="mb-4"><b>Participantes:</b> {players.length}/{maxPlayer}</p>
                                <p><b>Notas:</b></p>
                                <p className='textOverflow mb-2'>{notes}</p>
                            </Stack>
                        </div>
                        <div className="d-grid">
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
                    <EventDetailsModal event_id={_id} name={name} notes={notes} day={day} timeStart={timeStart} timeText={timeText} players={players} maxPlayer={maxPlayer} field={field} />
                </Modal.Body>
                <Modal.Footer >
                    <div className="d-grid">
                        <Button variant="DPmain" onClick={fireJoinActions}>Unirme</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EventCard