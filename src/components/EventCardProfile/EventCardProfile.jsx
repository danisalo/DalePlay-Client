import { Card } from "react-bootstrap"
import './EventCardProfile.css'


const EventCardProfile = ({ name, timeStart, playMinTotal }) => {



    return (
        <>

            <Card className="mb-4 EventCard">
                <Card.Img variant="top" />
                <Card.Body>
                    <h3 className='blackOps'>{name}</h3>
                    <p>{timeStart} PM - {playMinTotal} min</p>

                </Card.Body>
            </Card>

        </>
    )
}

export default EventCardProfile