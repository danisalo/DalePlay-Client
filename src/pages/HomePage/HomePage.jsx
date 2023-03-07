import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomePage.css'


const HomePage = () => {

    return (
        <Container className='homepage' md={{ span: 10, offset: 1 }}>
            <Row>
                <Col >
                    <img src="https://www.cmdsport.com/app/uploads/2020/11/inversion-de-13-millones-de-euros-en-el-nuevo-complejo-deportivo-de-jerez.jpg" alt="" />
                    <h1>¡Dale Play!</h1>
                    <hr />
                    <p>Bienvenido a la mejor app para que Aldi practique moverse</p>
                    <Link to="/clubs">
                        <Button variant="dark">Ver Clubs</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}


export default HomePage