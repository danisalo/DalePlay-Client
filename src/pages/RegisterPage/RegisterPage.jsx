import { Container, Row, Col } from "react-bootstrap"
import RegisterForm from "../../components/RegisterForm/RegsiterForm"
import './RegisterPage.css'


const RegisterPage = () => {

    return (
        <Container className="formTitle">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2>Registro</h2>
                    <RegisterForm />
                </Col>
            </Row>
        </Container>
    )
}


export default RegisterPage