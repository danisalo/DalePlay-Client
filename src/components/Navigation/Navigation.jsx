import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'


const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    return (
        <Navbar className='navbar' bg='light' expand='lg'>
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
                    <Link to="/partidas">
                        <Nav.Link as="span">Ver Partidas</Nav.Link>
                    </Link>
                    <Link to="/crear-partida">
                        <Nav.Link as="span">Crear Partidas</Nav.Link>
                    </Link>
                    <Link to="/crear-club">
                        <Nav.Link as="span">Crear Clubs</Nav.Link>
                    </Link>
                </Nav >
                {
                    user
                        ?
                        <>
                            <Link to="/perfil">
                                <Nav.Link as="span">Mi Perfil</Nav.Link>
                            </Link>
                            <Nav.Link as="span" onClick={logout}>Cerrar sesión</Nav.Link>
                        </>
                        :
                        <>
                            <Link to="/iniciar-sesion">
                                <Nav.Link as="span">Iniciar sesión</Nav.Link>
                            </Link>
                            <Link to="/registro">
                                <Nav.Link as="span">Registrarme</Nav.Link>
                            </Link>
                        </>
                }
            </Container >
        </Navbar >
    )
}


export default Navigation