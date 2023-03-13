import { Card } from 'react-bootstrap'

const FieldCard = ({ sport, hourlyPrice, maxPlayers, timeSlots }) => {

    const tempImg = "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"

    const opens = 0
    const closes = timeSlots.length - 1

    return (
        <>
            < Card>
                <Card.Img variant="top" src={tempImg} />
                <Card.Body>
                    <Card.Title>Partida de {sport}</Card.Title>
                    <Card.Text>Precio por hora:{hourlyPrice}</Card.Text>
                    <Card.Text>Jugadores: {maxPlayers}</Card.Text>
                    <Card.Text>Abierto de {timeSlots[opens]} a {timeSlots[closes]}</Card.Text>
                </Card.Body>
            </Card >
        </>
    )
}


export default FieldCard