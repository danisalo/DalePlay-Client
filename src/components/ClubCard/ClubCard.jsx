import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './ClubCard.css'


const ClubCard = ({ _id, name, description, location, imageUrl }) => {

    return (
        <Link to={`/clubs/${_id}`}>
            <Card className="mb-4 ClubCard">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <h4 className='titleOverflow'>{name}</h4>
                        <p className='textOverflow'>{description}</p>
                    </div>
                    <div>
                        <p>Los Chorros, Miranda{location}</p>
                        <Link to={`/clubs/${_id}`} className="d-grid">
                            <Button variant="DPmain">Ver Club</Button>
                        </Link>
                    </div>

                </Card.Body>
            </Card>
        </Link >
    )
}


export default ClubCard