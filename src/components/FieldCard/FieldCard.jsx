import { useEffect, useState } from 'react'
import { SelectButton } from 'primereact/selectbutton'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import eventsServices from '../../services/events.services'
import Loader from '../Loader/Loader'

const FieldCard = ({ sport, hourlyPrice, maxPlayers, timeSlots, events }) => {

    const [value, setSelectedHour] = useState([])

    const [availableSlots, setAvailableSlots] = useState([timeSlots])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { getAvailableSlots() }, [])


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

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    )
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    )

    const title = `Partida de ${sport}`


    return (
        <>

            {
                isLoading
                    ?
                    <Loader />
                    :
                    <>

                        <div className="card flex justify-content-center">
                            <Card title={title} subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                                <p className="m-0">
                                    numquam deseru
                                </p>
                                <SelectButton size="sm" value={value} onChange={(e) => setSelectedHour(e.value)} optionLabel='name' options={items} multiple />
                            </Card>
                        </div>

                    </>
            }

        </>

    );
}
export default FieldCard

    // < Card style = {{ width: '40rem' }}>
    //                             <Card.Img variant="top" src="holder.js/100px180" />
    //                             <Card.Body>
    //                                 <Card.Title>Partida de {sport}</Card.Title>
    //                                 <Card.Text>{hourlyPrice}</Card.Text>
    //                                 <Card.Text>{maxPlayers}</Card.Text>
    //                                 <Card.Body>

    //                                     <SelectButton value={value} onChange={(e) => setSelectedHour(e.value)} optionLabel='name' options={items} multiple />

    //                                 </Card.Body>
    //                                 {/* <Card.Text>Available Time Slots: {availableSlots.join(', ')}</Card.Text> */}
    //                             </Card.Body>
    //                         </Card >