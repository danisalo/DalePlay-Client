import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginPage.css'


const LoginPage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Inicia sesión</h1>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}


export default LoginPage