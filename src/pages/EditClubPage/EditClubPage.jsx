import { Col, Container, Row } from "react-bootstrap"
import EditClubForm from "../../components/EditClubForm/EditClubForm"
import './EditClubPage.css'


const EditClubPage = () => {

    return (
        <Container className="formTitle">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 >Editar Club Deportivo</h2>
                    <EditClubForm />
                </Col>
            </Row>
        </Container>
    )
}


export default EditClubPage