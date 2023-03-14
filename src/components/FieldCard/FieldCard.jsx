import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './FieldCard.css'


const FieldCard = ({ _id, sport, hourlyPrice, maxPlayers, timeSlots }) => {

    const tempImg = "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"

    const opens = 0
    const closes = timeSlots.length - 1

    return (
        <>
            < Card>
                <Card.Img variant="top" src={tempImg} />
                <Card.Body>
                    <h4>Partida de {sport}</h4>
                    <p>Precio por hora: €{hourlyPrice}</p>
                    <p>Jugadores: {maxPlayers}</p>
                    <p>Abierto de {timeSlots[opens]} a {timeSlots[closes]}</p>
                    <div>
                        <Link to={`/cancha/${_id}`} className="d-grid">
                            <Button variant="dark">Ver Cancha</Button>
                        </Link>
                        <Link to={`/${_id}/editar`} className="d-grid">
                            <Button variant="warning">Editar Cancha</Button>
                        </Link>
                        {/* <Button onClick={() => deleteClub(club._id)} variant="danger" className="d-grid">Eliminar Cancha</Button> */}
                    </div>
                </Card.Body>
            </Card >
        </>
    )
}


export default FieldCard