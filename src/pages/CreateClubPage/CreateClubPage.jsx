import { Container, Row, Col } from "react-bootstrap"

import ClubForm from "../../components/CreateClubForm/CreateClubForm"


const CreateClubPage = () => {

    return (
        <div className="pt-4">
            <Container className="pt-4 text-left">
                <Row className="pt-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2 >Agregar Club</h2>
                        <ClubForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default CreateClubPage