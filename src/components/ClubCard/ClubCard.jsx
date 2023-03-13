import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './ClubCard.css'


const ClubCard = ({ _id, name, description, location, imageUrl }) => {

    return (
        <Link to={`/clubs/${_id}`}>
            <Card className="mb-4 ClubCard">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <h4>{name}</h4>
                    <p className='textOverflow'>{description}</p>
                    <p className="ubi">Los Chorros, Miranda{location}</p>
                    <Link to={`/clubs/${_id}`} className="d-grid">
                        <Button variant="dark">Ver Club</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Link >
    )
}


export default ClubCard