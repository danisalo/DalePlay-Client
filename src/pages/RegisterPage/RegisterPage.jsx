import { Container, Row, Col } from "react-bootstrap"
import RegisterForm from "../../components/RegisterForm/RegsiterForm"


const RegisterPage = () => {

    return (
        <div className="pt-4 mb-4">
            <Container className="text-left pt-4">
                <Row className="pt-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2 className="mb-4">Registro</h2>
                        <RegisterForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default RegisterPage