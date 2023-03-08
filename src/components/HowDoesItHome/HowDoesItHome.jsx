import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './HowDoesItHome.css'


const HowDoesItHome = () => {
    const tempImg = "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"

    return (
        <Row>
            <Col md={{ span: 6 }}>
                <img src={tempImg} alt="Image" className='halfImg' />
            </Col>
            <Col className='HowDoesItHome' md={{ span: 6 }}>
                <h2 className='blackOps mb-4'>¿Cómo funciona?</h2>
                <p><b>1. Regístrate:</b> Crea una cuenta y únete a nuestra comunidad deportiva.</p>
                <p><b>2. Busca partidas:</b> Encuentra partidas disponibles cerca de ti.</p>
                <p><b>3. Únete u organiza:</b> Únete a un partido existente u organiza uno tú mismo.</p>
                <p className='mt-2'>¡Disfruta de jugar fútbol, vóley, baloncesto o pádel con gente nueva!</p>
                <Link to="/clubs">
                    <Button variant="dark">Ver Partidas</Button>
                </Link>
            </Col>
        </Row>
    )
}


export default HowDoesItHome