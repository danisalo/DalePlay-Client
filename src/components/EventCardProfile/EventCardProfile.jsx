import { useEffect, useState } from "react"
import { Row, Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

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

    useEffect(() => { loadField() }, [])


    const loadField = () => {

        fieldServices
            .getOne(field)
            .then(({ data }) => {
                setFieldData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Link to={`/evento/${_id}`}>
            <Card className="mb-4 EventCard">
                <div className='imgMask'>
                    <Card.Img variant="top" className='imgOverflow' src={fieldData?.imageUrl} />
                </div>
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <h4>{name}</h4>
                        <p><b>Tiempo de juego:</b>{timeStart} - {timeEnd(timeStart, playMinTotal)}</p>
                        <p><b>Precio:</b> hacer playMinTotal * hourlyPrice</p>
                        <p className='textOverflow'><b>Notas:</b>{notes}</p>
                        <p><b>Participantes:</b> {players.length}/{fieldData?.maxPlayers}</p>
                        {
                            players.map(elm => {
                                return (
                                    <Row key={elm._id}>
                                        <div md={{ span: 3 }}>
                                            <img className='sm-avatar' src={elm.imageUrl} alt={elm.username} />
                                        </div>
                                    </Row>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Button variant="DPmain">Ver Detalles</Button>
                    </div>
                </Card.Body>
            </Card>
        </Link >
    )
}


export default EventCardProfile