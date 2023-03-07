import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const ClubCard = ({ DATA }) => {
    return (
        <Card>
            <Card.Img variant="top" src="https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg" />
            <Card.Body>
                <Card.Title>Nombre Hardcodeado</Card.Title>
                <Card.Text>
                    Está sería la descripción de la unidad deportiva... SI TUVIERAMOS ALGUNA
                </Card.Text>
                <Button fluid variant="dark">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default ClubCard