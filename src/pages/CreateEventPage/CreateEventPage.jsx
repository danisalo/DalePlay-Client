import { Container, Row, Col } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

import EventForm from "../../components/CreateEventForm/CreateEventForm"


const CreateEventPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/clubs')
    }

    return (
        <Container className="text-left">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2>Crear partida</h2>
                    <EventForm fireFinalActions={fireFinalActions} />
                </Col>
            </Row>
        </Container>
    )
}


export default CreateEventPage