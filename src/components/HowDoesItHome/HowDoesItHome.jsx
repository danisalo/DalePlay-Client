import { Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './HowDoesItHome.css'


const HowDoesItHome = () => {

    return (
        <Row>
            <Col md={{ span: 6 }}>
                <Image fluid src='https://res.cloudinary.com/dle7ctrmn/image/upload/v1678994722/IMG_7975-scaled_sb31xh.jpg' alt="Image" />
            </Col>
            <Col className='HowDoesItHome' md={{ span: 6 }}>
                <div className='pt-2'>
                    <h2 className='mb-4 text-left'>¿Cómo funciona?</h2>
                    <h6 className='mb-4'><b>1. Regístrate:</b> Crea una cuenta y únete a nuestra comunidad deportiva.</h6>
                    <h6 className='mb-4'><b>2. Busca partidas:</b> Encuentra partidas disponibles cerca de ti.</h6>
                    <h6 className='mb-4'><b>3. Únete u organiza:</b> Únete a un partido existente u organiza uno tú mismo.</h6>
                    <h6 className='mb-4'>Disfruta de jugar fútbol, vóley, baloncesto o pádel, ¡Dale Play!</h6>
                    <Link to="/partidas" className='d-grid mt-4'>
                        <Button variant="DPmain">Ver Partidas</Button>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}


export default HowDoesItHome