import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginPage.css'


const LoginPage = () => {

    return (
        <Container className="pt-5">
            <Row className="pt-5">
                <Col md={{ span: 8, offset: 2 }}>
                    <h2>Inicia sesión</h2>
                    <div className="loginForm">
                        <LoginForm />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default LoginPage