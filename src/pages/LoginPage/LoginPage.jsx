import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginPage.css'


const LoginPage = () => {

    return (
        <Container className="formTitle">
            <Row >
                <Col md={{ span: 8, offset: 2 }}>
                    <h2>Inicia sesión</h2>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}


export default LoginPage