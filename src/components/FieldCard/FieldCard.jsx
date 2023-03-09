import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const FieldCard = ({ sport, hourlyPrice, maxPlayers, timeSlots, events }) => {

    const [isLoading, setIsLoading] = useState(true)

    const tempImg = "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"


    return (
        <>
            < Card>
                <Card.Img variant="top" src={tempImg} />
                <Card.Body>
                    <Card.Title>Partida de {sport}</Card.Title>
                    <Card.Text>{hourlyPrice}</Card.Text>
                    <Card.Text>{maxPlayers}</Card.Text>
                </Card.Body>
            </Card >
        </>
    )
}


export default FieldCard