import { useEffect, useState } from "react"
import { Row, Col, Card, Button, Container, Stack } from "react-bootstrap"
import { Link } from 'react-router-dom'
import clubsServices from "../../services/club.services"

import fieldServices from '../../services/field.services'

import { timeEnd, parsedDate } from "../../utils/projectUtils"

import './EventCardProfile.css'


function EventCardProfile({ _id, name, day, timeStart, playMinTotal, players, field }) {

    const [fieldData, setFieldData] = useState({
        hourlyPrice: '',
        maxPlayers: 1,
        imageUrl: ''
    })

    const [isLoading, setIsLoading] = useState(true)
    const [club, setClub] = useState({})

    useEffect(() => {
        Promise.all([loadField(), loadClub()]).then(() => {
            setIsLoading(false)
        })
    }, [])

    const playerCost = (((playMinTotal / 60) * fieldData?.hourlyPrice))

    const loadField = () => {
        return fieldServices.getOne(field).then(({ data }) => {
            setFieldData(data)
        }).catch(err => console.log(err))
    }

    const loadClub = () => {
        return clubsServices.getClubByField(field).then(({ data }) => {
            setClub(data[0])
        }).catch(err => console.log(err))
    }


    return (
        <Link to={`/evento/${_id}`}>
            <Card className="mb-4 EventCardProfile" >
                <div className='imgMask'>
                    <Card.Img variant="top" className='imgOverflow' src={fieldData?.imageUrl} />
                </div>
                <Card.Body className='d-flex flex-column'>
                    <h4 className="mb-2 text-left">{name}</h4>
                    <p>{club && club.name}</p>
                    <Stack className="mb-1">
                        <p><b>Fecha:</b> {parsedDate(day)}</p>
                        <p><b>Horario:</b>{timeStart} - {timeEnd(timeStart, playMinTotal)}</p>
                        <p><b>Precio:</b> {playerCost} €</p>
                        <p><b>Participantes:</b> {players.length}/{fieldData?.maxPlayers}</p>
                    </Stack>
                    <Stack direction="horizontal" gap={2}>
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