import { Container, Row, Col } from "react-bootstrap"

import EditUserForm from "../../components/EditUserForm/EditUserForm"


const EditUserPage = () => {

    return (
        <div className="pt-4">
            <Container className="pt-4 text-left">
                <Row className="pt-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2 className="mb-4">Editar Mi Perfil</h2>
                        <EditUserForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default EditUserPage