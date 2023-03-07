import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"


const LoginPage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Inicio de sesión</h1>

                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage