import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './ClubCard.css'


const ClubCard = ({ _id, name, description, address, imageUrl }) => {

    return (
        <Link to={`/clubs/${_id}`}>
            <Card className="mb-4 ClubCard">
                <div className='imgMask'>
                    <Card.Img variant="top" className='imgOverflow' src={imageUrl} />
                </div>
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <h4 className='titleOverflow'>{name}</h4>
                        <p className='textOverflow'>{description}</p>
                    </div>
                    <div>
                        <p className='addressOverflow'>{address}</p>
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