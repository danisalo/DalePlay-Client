import { Container, Row, Col } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import EventForm from "../../components/EventForm/EventForm"
import './CreateEventPage.css'


const CreateEventPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/clubs')
    }

    return (
        <Container className="pt-5">
            <Row className="pt-5">
                <Col md={{ span: 8, offset: 2 }}>
                    <h2>Crear partida</h2>
                    <div className="clubForm">
                        <EventForm fireFinalActions={fireFinalActions} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default CreateEventPage