import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import eventsServices from '../../services/events.services'
import './EventCard.css'


function EventCard({ _id, name, timeStart, playMinTotal }) {

    const handleJoinSubmit = e => {
        e.preventDefault()

        eventsServices
            .joinEvent(_id)
            .then(({ data }) => { console.log(data) })
            .catch(err => console.log(err))
    }

    const tempImg = "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"

    return (
        <>
            <Card className="mb-4 EventCard">
                <Card.Img variant="top" src={tempImg} />
                <Card.Body>
                    <h3 className='blackOps'>{name}</h3>
                    <p>{timeStart} PM - {playMinTotal}13 PM</p>
                    <div className="d-grid mb-2">
                        <Button variant="dark">Ver Detalles</Button>
                    </div>
                    <div className="d-grid">
                        <Button variant="dark" onClick={handleJoinSubmit} >Unirme</Button>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default EventCard