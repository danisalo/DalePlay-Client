import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container fluid>
                <Nav>
                    <Navbar.Brand href="/">
                        < img
                            alt="Dale Play Logo"
                            src="https://res.cloudinary.com/dle7ctrmn/image/upload/v1678102683/Dale_Play_kemerm.png"
                            className="DalePlayLogo"
                        />
                    </Navbar.Brand >
                    <Link to="/">
                        <Nav.Link as="span">Inicio</Nav.Link>
                    </Link>
                    <Link to="/clubs">
                        <Nav.Link as="span">Ver Clubs</Nav.Link>
                    </Link>
                    <Link to="/">
                        <Nav.Link as="span">Ver Partidas</Nav.Link>
                    </Link>
                </Nav >
                <Nav>
                    <Nav.Link href="/">Crear Cuenta</Nav.Link>
                    <Nav.Link href="/">Iniciar Sesión</Nav.Link>
                    <Nav.Link href="/">Mi Perfil</Nav.Link>
                    <Nav.Link href="/registro">Crear Cuenta</Nav.Link>
                    <Nav.Link href="/iniciar-sesion">Iniciar Sesión</Nav.Link>
                    <Nav.Link href="/">Cerrar Sesión</Nav.Link>
                </Nav >
            </Container >
        </Navbar >
    )
}


export default Navigation