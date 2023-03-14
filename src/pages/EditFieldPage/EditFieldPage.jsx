import { Col, Container, Row } from "react-bootstrap"
import EditFieldForm from "../../components/EditFieldForm/EditFieldForm"


const EditFieldPage = () => {

    return (
        <Container className="formTitle">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 >Editar Cancha</h2>
                    <EditFieldForm />
                </Col>
            </Row>
        </Container>
    )
}


export default EditFieldPage