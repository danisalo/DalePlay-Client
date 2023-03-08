import { Button, Card } from 'react-bootstrap'


const ClubCard = ({ name, description, location, imageUrl, fields }) => {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{location}</Card.Text>
                <Button fluid variant="dark" href='/field/create'>Añadir Cancha Deportiva</Button>
            </Card.Body>
        </Card>
    )
}

export default ClubCard