import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginPage.css'


const LoginPage = () => {

    return (
        <Container>
            <Row className="mt-4">
                <Col md={{ span: 8, offset: 2 }}>
                    <h1>Inicia sesión</h1>
                    <div className="loginForm">
                        <LoginForm />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default LoginPage