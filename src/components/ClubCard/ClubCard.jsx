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
                        <h4 className='titleOverflow text-left mb-2'>{name}</h4>
                        <p className='textOverflow text-left'>{description}</p>
                    </div>
                    <div>
                        <p className='addressOverflow text-left mb-4'>{address}</p>
                        <div className="d-grid">
                            <Button variant="DPmain">Ver Club</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Link >
    )
}


export default ClubCard