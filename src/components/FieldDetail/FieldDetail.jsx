import { useEffect, useState } from "react"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"

import { SelectButton } from 'primereact/selectbutton'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

import Loader from '../Loader/Loader'
import eventsServices from "../../services/events.services"
import CreateEventForm from "../CreateEventForm/CreateEventForm"


const FieldDetail = ({ field, day, date, loadField }) => {

    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [value, setSelectedHour] = useState([])
    const [availableSlots, setAvailableSlots] = useState([])

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

                            <h3 className="mb-4">Crear Partida de {field.sport}</h3>
                            <hr />
                            <Row>

                                <Col md={{ span: 6, offset: 1 }}>
                                    <img src={field.imageUrl} style={{ width: '150px' }} />
                                </Col>

                                <Col md={{ span: 4 }} >
                                    <SelectButton style={{ border: '2px solid', fontSize: '8px' }} value={value} onChange={(e) => setSelectedHour(e.value)} optionLabel='name' options={items} multiple />
                                </Col>


                                <Button onClick={() => setShowModal(true)} variant="DPmain" size='sm'>Crear nueva partida</Button>
                            </Row>

                        </Container >

                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton> <Modal.Title>Resumen de reserva {field.sport}</Modal.Title></Modal.Header>
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