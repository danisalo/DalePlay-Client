import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"

const EventDetailsModal = ({ name, notes, day, timeStart, timeText, players, maxPlayer, field }) => {

    const [fullDate, setfullDate] = useState([])

    useEffect(() => {
        parsedDate()
    }, [])

    const parsedDate = () => {
        if (day) {
            const date = new Date(day)
            const finalDay = date.getDate()
            const finalMonth = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date)
            const finalYear = date.getFullYear()
            let finalDate = `${finalDay} de ${finalMonth} de ${finalYear}`
            return setfullDate(finalDate)
        }
    }

    return (
        <Container>
            <Row>
                <div className="mb-4">
                    <h3 className="mb-2">Juego de {name}</h3>
                    <p>{notes}</p>
                </div>
                <div>
                    <p><b>Fecha:</b> {fullDate}</p>
                    <p><b>Horario:</b> {timeStart} - {timeText}</p>
                    <p><b>Participantes:</b> {players.length}/{maxPlayer}</p>
                </div>
            </Row>
        </Container>
    )
}


export default EventDetailsModal