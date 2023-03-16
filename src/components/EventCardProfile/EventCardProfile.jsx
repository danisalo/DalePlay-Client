import { useEffect, useState } from "react"
import { Row, Col, Card, Button, Container, Stack } from "react-bootstrap"
import { Link } from 'react-router-dom'
import clubsServices from "../../services/club.services"

import fieldServices from '../../services/field.services'

import { timeEnd } from "../../utils/projectUtils"

import './EventCardProfile.css'


function EventCardProfile({ _id, name, notes, timeStart, playMinTotal, players, field }) {

    const [fieldData, setFieldData] = useState({
        hourlyPrice: '',
        maxPlayers: 1,
        imageUrl: ''
    })
    const [isLoading, setIsLoading] = useState(true)
    const [club, setClub] = useState({})

    useEffect(() => { loadField() }, [])

    const playerCost = (((playMinTotal / 60) * fieldData?.hourlyPrice) / fieldData?.maxPlayers)

    const loadField = () => {

        fieldServices
            .getOne(field)
            .then(({ data }) => {
                setFieldData(data)
                clubsServices
                    .getClubByField(field)
                    .then(({ data }) => {
                        setClub(data[0])
                        setIsLoading(false)
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    }


    return (
        <Link to={`/evento/${_id}`}>
            <Card className="mb-4" >
                <div className='imgMask'>
                    <Card.Img variant="top" className='imgOverflow' src={fieldData?.imageUrl} />
                </div>
                <Card.Body className='d-flex flex-column'>
                    <h4 className="mb-2">{name}</h4>
                    <p>{club.name}</p>
                    <Stack className="mb-1">
                        <p><b>Horario:</b>{timeStart} - {timeEnd(timeStart, playMinTotal)}</p>
                        <p><b>Precio:</b> {playerCost} €</p>
                        <p className='textOverflow'><b>Notas:</b>{notes}</p>
                        <p><b>Participantes:</b> {players.length}/{fieldData?.maxPlayers}</p>
                    </Stack>


                    <Stack direction="horizontal" gap={3}>
                        {

                            players.map(elm => {
                                return (

                                    <img key={elm._id} className='sm-avatar mb-2' src={elm.imageUrl} alt={elm.username} />
                                )
                            })
                        }

                    </Stack>



                    <Button variant="DPmain">Ver Detalles</Button>
                </Card.Body>
            </Card>
        </Link >
    )
}


export default EventCardProfile