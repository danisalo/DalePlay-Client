import { Navbar, Container, Nav } from 'react-bootstrap'
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
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/">Ver Clubs</Nav.Link>
                    <Nav.Link href="/">Ver Partidas</Nav.Link>
                </Nav >
                <Nav>
                    <Nav.Link href="/">Crear Cuenta</Nav.Link>
                    <Nav.Link href="/">Iniciar Sesión</Nav.Link>
                    <Nav.Link href="/">Cerrar Sesión</Nav.Link>
                </Nav>
            </Container >
        </Navbar >
    )
}


export default Navigation