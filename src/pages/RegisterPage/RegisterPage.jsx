import { Container, Row, Col } from "react-bootstrap"
import RegisterForm from "../../components/RegisterForm/RegsiterForm"
import './RegisterPage.css'


const RegisterPage = () => {

    return (
        <Container className="pt-5">
            <Row className="pt-5">
                <Col md={{ span: 8, offset: 2 }}>
                    <h1>Registro</h1>
                    <div className="registerForm">
                        <RegisterForm />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default RegisterPage