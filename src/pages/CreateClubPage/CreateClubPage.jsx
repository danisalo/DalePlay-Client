
import { Col, Container, Row } from "react-bootstrap"
import ClubForm from "../../components/ClubForm/ClubForm"
import './CreateClubPage.css'


const CreateClubPage = () => {

    return (
        <Container className="pt-5">
            <Row className="pt-5">
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 >Agregar Club Deportivo</h2>
                    <div className="clubForm">
                        <ClubForm />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default CreateClubPage