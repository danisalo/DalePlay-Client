import { Col, Container, Row } from "react-bootstrap"
import ClubForm from "../../components/CreateClubForm/CreateClubForm"
import './CreateClubPage.css'


const CreateClubPage = () => {

    return (
        <Container className="formTitle">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 >Agregar Club Deportivo</h2>
                    <ClubForm />
                </Col>
            </Row>
        </Container>
    )
}


export default CreateClubPage