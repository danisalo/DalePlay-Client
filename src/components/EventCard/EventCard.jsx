import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import eventsServices from '../../services/events.services'


function EventCard({ name, timeStart, playMinTotal, _id }) {

    const handleJoinSubmit = e => {
        e.preventDefault()

        eventsServices
            .joinEvent(_id)
            .then(({ data }) => { console.log(data) })
            .catch(err => console.log(err))

    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>hola</Card.Text>
                <Card.Text>{timeStart} - {playMinTotal}</Card.Text>
                <Button variant="primary">Ver</Button>
                <Button variant="primary" onClick={handleJoinSubmit} >Unir</Button>

            </Card.Body>
        </Card>
    );
}

export default EventCard