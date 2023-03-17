import { useEffect, useState } from "react"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

import { SelectButton } from 'primereact/selectbutton'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

import Loader from '../Loader/Loader'
import eventsServices from "../../services/events.services"

import CreateEventForm from "../CreateEventForm/CreateEventForm"

import './FieldDetail.css'


const FieldDetail = ({ field, day, date, loadField }) => {

    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [value, setSelectedHour] = useState([])
    const [availableSlots, setAvailableSlots] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getAvailableSlots()
    }, [field])

    const getAvailableSlots = () => {

        if (field.events.length > 0) {
            const activeEvents = field.events.map(event =>

                eventsServices
                    .getOne(event)
                    .then(({ data }) => data)
                    .catch(err => console.log(err))
            )

            return Promise
                .all(activeEvents)
                .then(events => {
                    const filteredEvents = events.filter(elm => elm.dayText === `${day}`)
                    const slotsReserved = filteredEvents.map(obj => obj.timeSlot)
                    const notAvailable = Array.from(new Set(slotsReserved.flat(Infinity)))
                    const slotsAvailables = [...field.timeSlots].filter(elm => !notAvailable.includes(elm))
                    setAvailableSlots(slotsAvailables)
                    setIsLoading(false)
                    return slotsAvailables
                })
        }

        else {
            setAvailableSlots(field.timeSlots)
            setIsLoading(false)
        }
    }

    const transformSlotsToObjects = (hours) => {
        const transformedHours = hours.map(hour => ({
            name: hour,
            value: hour
        }))

        return transformedHours
    }

    const items = transformSlotsToObjects(availableSlots)

    const fireFinalActions = () => {
        setShowModal(false)
        loadField()
        getAvailableSlots()
    }

    return (
        <>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <>
                        <Container>
                            <h5 className="mb-4 subtitle">Campo de {field.sport}</h5>
                            <Row>
                                <Col>
                                    <SelectButton value={value} onChange={(e) => setSelectedHour(e.value)} optionLabel='name' options={items} multiple />
                                </Col>
                                <div className="d-grid pt-4">
                                    <Button onClick={() => setShowModal(true)} variant="DPmain" size='lg' disabled={!value || value.length === 0}>Crear partida</Button>
                                </div>
                            </Row>
                        </Container >

                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton><Modal.Title>Reserva para {field.sport}</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <CreateEventForm fireFinalActions={fireFinalActions} sport={field.sport} hours={value} price={field.hourlyPrice} maxPlayers={field.maxPlayers} fieldId={field._id} date={date} dayText={day} />
                            </Modal.Body>
                        </Modal>

                    </>
            }

        </>
    )
}

export default FieldDetail