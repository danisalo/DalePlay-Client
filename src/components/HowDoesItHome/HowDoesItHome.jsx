import { Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './HowDoesItHome.css'


const HowDoesItHome = () => {
    const tempImg = "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"

    return (
        <Row>
            <Col md={{ span: 6 }}>
                <Image fluid src={tempImg} alt="Image" />
            </Col>
            <Col className='HowDoesItHome' md={{ span: 6 }}>
                <h2 className='mb-4'>¿Cómo funciona?</h2>
                <h6 className='mb-4'><b>1. Regístrate:</b> Crea una cuenta y únete a nuestra comunidad deportiva.</h6>
                <h6 className='mb-4'><b>2. Busca partidas:</b> Encuentra partidas disponibles cerca de ti.</h6>
                <h6 className='mb-4'><b>3. Únete u organiza:</b> Únete a un partido existente u organiza uno tú mismo.</h6>
                <h6 className='mb-4'>Disfruta de jugar fútbol, vóley, baloncesto o pádel, ¡Dale Play!</h6>
                <Link to="/partidas" className='d-grid mt-4'>
                    <Button variant="DPmain">Ver Partidas</Button>
                </Link>
            </Col>
        </Row>
    )
}


export default HowDoesItHome