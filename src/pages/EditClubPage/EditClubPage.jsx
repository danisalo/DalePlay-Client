import { Container, Row, Col } from "react-bootstrap"

import EditClubForm from "../../components/EditClubForm/EditClubForm"


const EditClubPage = () => {

    return (
        <div className="pt-4">
            <Container className="pt-4 formTitle">
                <Row className="pt-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2 >Editar Club</h2>
                        <EditClubForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default EditClubPage