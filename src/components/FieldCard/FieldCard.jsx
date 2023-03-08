import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import fieldsServices from '../../services/fields.services'


function FieldCard({ sport, hourlyPrice, maxPlayers, _id }) {



    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{sport}</Card.Title>
                <Card.Text>{hourlyPrice}</Card.Text>
                <Card.Text>{maxPlayers}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FieldCard