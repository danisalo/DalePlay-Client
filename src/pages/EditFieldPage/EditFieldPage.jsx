import { Col, Container, Row } from "react-bootstrap"

import EditFieldForm from "../../components/EditFieldForm/EditFieldForm"


const EditFieldPage = () => {

    return (
        <div className="pt-4">
            <Container className="text-left pt-4">
                <Row className="pt-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2 className="mb-4">Editar Campo</h2>
                        <EditFieldForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default EditFieldPage