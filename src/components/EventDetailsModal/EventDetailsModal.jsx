import { useState, useEffect } from "react"
import { Container, Row, Stack } from "react-bootstrap"

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
                <h4 className="mb-2">Juego de {name}</h4>
                <Stack>
                    <p className="mb-1"><b>Fecha:</b> {fullDate}</p>
                    <p className="mb-1"><b>Horario:</b> {timeStart} - {timeText}</p>
                    <p className="mb-4"><b>Participantes:</b> {players.length}/{maxPlayer}</p>
                    <p className="mb-1"><b>Notas:</b></p>
                    <p>{notes}</p>
                </Stack>
            </Row>
        </Container>
    )
}


export default EventDetailsModal