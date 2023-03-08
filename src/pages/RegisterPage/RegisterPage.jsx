import { Container, Row, Col } from "react-bootstrap"
import RegisterForm from "../../pages/RegisterPage/RegisterPage"
import './RegisterPage.css'


const RegisterPage = () => {

    return (
        <Container>
            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Registro</h1>

                    <RegisterForm />
                </Col>
            </Row>
        </Container>
    )
}


export default RegisterPage