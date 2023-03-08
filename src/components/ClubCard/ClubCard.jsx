import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ClubCard.css'

const ClubCard = ({ _id, name, description, location, imageUrl }) => {
    const tempImg = "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"
    return (
        <Link to={`/clubs/${_id}`}>
            <Card className="mb-4 ClubCard">
                <Card.Img variant="top" src={tempImg} />
                <Card.Body>
                    <h3 className='blackOps'>Club Deportivo {name}</h3>
                    <p>Está sería la descripción Lorem ipsum dolor sit amet consectetur{description}</p>
                    <p className="ubi">Los Chorros, Miranda{description}</p>
                    <Link to={`/clubs/${_id}`} className="d-grid">
                        <Button variant="dark">Ver Club</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Link >
    )
}


export default ClubCard