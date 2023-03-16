import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './FieldCard.css'


const FieldCard = ({ _id, sport, hourlyPrice, maxPlayers, imageUrl, timeSlots }) => {

    const opens = 0
    const closes = timeSlots.length - 1

    return (
        <Link to={`/cancha/${_id}`}>
            < Card className='FieldCard'>
                <div className='imgMask'>
                    <Card.Img variant="top" className='imgOverflow' src={imageUrl} />
                </div>
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <h4 className='mb-2'>{sport}</h4>
                        <p className='mb-2'>Jugadores: {maxPlayers}</p>
                        <p className='mb-2'>Precio por hora: €{hourlyPrice}</p>
                        <p>Abierto de {timeSlots[opens]} a {timeSlots[closes]}</p>
                    </div>
                    <div>
                        <div className="d-grid">
                            <Button variant="DPmain">Ver Cancha</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card >
        </Link>
    )
}


export default FieldCard