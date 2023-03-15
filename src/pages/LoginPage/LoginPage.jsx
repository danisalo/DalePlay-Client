import { Col, Container, Row } from "react-bootstrap"

import LoginForm from "../../components/LoginForm/LoginForm"

import './LoginPage.css'


const LoginPage = () => {

    return (
        <div className="pt-4">
            <Container className="text-left pt-4">
                <Row className="pt-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2 className="mb-4">Inicia sesión</h2>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default LoginPage