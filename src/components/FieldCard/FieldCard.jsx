import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { SelectButton } from 'primereact/selectbutton'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import eventsServices from '../../services/events.services'
import Loader from '../Loader/Loader'
import { Container } from 'react-bootstrap'

const FieldCard = ({ sport, hourlyPrice, maxPlayers, timeSlots, events }) => {

    const [value, setSelectedHour] = useState([])

    const [availableSlots, setAvailableSlots] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { getAvailableSlots() }, [])


    const loadField = () => {

        // clubServices
        //     .getClubs()
        //     .then(({ data }) => {
        //         console.log(data)
        //         setClubs(data)
        //         setIsLoading(false)
        //     })
        //     .catch(err => console.log(err))
    }

    const getAvailableSlots = () => {
        const occupiedSlotsPromise = events.map(event =>
            eventsServices.getOne(event._id)
                .then(({ data }) => data.timeSlot)
                .catch(err => console.log(err))
        );
        console.log(occupiedSlotsPromise)

        return Promise.all(occupiedSlotsPromise)
            .then(occupiedSlots => {
                console.log(occupiedSlots[0])
                const availableSlots = [...timeSlots].filter(elm => !occupiedSlots[0].includes(elm))
                setAvailableSlots(availableSlots)
                setIsLoading(false)
                console.log(availableSlots)
                return availableSlots

            })
    }

    const items = availableSlots.map(str => ({ name: str, value: str }))
    console.log(items)


    return (
        <>
            <Container>
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <Card style={{ width: '40rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Partida de {sport}</Card.Title>
                                    <Card.Text>{hourlyPrice}</Card.Text>
                                    <Card.Text>{maxPlayers}</Card.Text>
                                    <Card.Body>

                                        <SelectButton value={value} onChange={(e) => setSelectedHour(e.value)} optionLabel='name' options={items} multiple />

                                    </Card.Body>
                                    {/* <Card.Text>Available Time Slots: {availableSlots.join(', ')}</Card.Text> */}
                                </Card.Body>
                            </Card>
                        </>
                }
            </Container>
        </>

    );
}
export default FieldCard