import { useEffect, useState } from "react"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import { SelectButton } from 'primereact/selectbutton'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import eventsServices from "../../services/events.services"
import Loader from '../Loader/Loader'
import CreateEventForm from "../CreateEventForm/CreateEventForm"


const FieldDetail = ({ field, day }) => {

    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [value, setSelectedHour] = useState([])
    const [availableSlots, setAvailableSlots] = useState([field.timeSlots])

    useEffect(() => {
        getAvailableSlots()
    }, [])

    const getAvailableSlots = () => {

        if (field.events.length === 0) {
            setAvailableSlots(field.timeSlots)
        }

        else {
            const occupiedSlotsPromise = field.events.map(event =>

                eventsServices
                    .getOne(event)
                    .then(({ data }) => data.timeSlot)
                    .catch(err => console.log(err))
            )

            return Promise.all(occupiedSlotsPromise)
                .then(occupiedSlots => {
                    const notAvailable = Array.from(new Set(occupiedSlots.flat(Infinity)))
                    const avSlots = [...field.timeSlots].filter(elm => !notAvailable.includes(elm))

                    setAvailableSlots(avSlots)
                    setIsLoading(false)
                    return avSlots
                })
        }

    }

    const items = availableSlots.map(str => ({ name: str, value: str }))

    const fireFinalActions = () => {
        setShowModal(false)
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

                                </Col>

                                <Col md={{ span: 4 }}>
                                    <img src={field.imageUrl} style={{ width: '100%' }} />
                                </Col>

                                <SelectButton value={value} onChange={(e) => setSelectedHour(e.value)} optionLabel='name' options={items} multiple />
                                <Button onClick={() => setShowModal(true)} variant="dark" size='sm'>Crear nueva partida</Button>
                            </Row>

                        </Container >

                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton> <Modal.Title>Resumen de reserva {field.sport}</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <CreateEventForm fireFinalActions={fireFinalActions} sport={field.sport} hours={value} price={field.hourlyPrice} maxPlayers={field.maxPlayers} fieldId={field._id} day={day} />
                            </Modal.Body>
                        </Modal>

                    </>
            }

        </>
    )
}

export default FieldDetail