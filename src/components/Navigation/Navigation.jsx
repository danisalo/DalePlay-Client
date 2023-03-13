import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'

const Navigation = () => {
    const { user, logout } = useContext(AuthContext)

    return (
        <Navbar bg='light' variant='light' expand='md' id='fixed'>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <h4>Dale Play</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/'>
                            <Nav.Link as='span'>Inicio</Nav.Link>
                        </Link>
                        <Link to='/clubs'>
                            <Nav.Link as='span'>Ver Clubs</Nav.Link>
                        </Link>
                        <Link to='/partidas'>
                            <Nav.Link as='span'>Ver Partidas</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav>
                        {user ? (
                            <>
                                <hr className='d-block d-md-none' />
                                <Link to='/perfil'>
                                    <Nav.Link as='span'>Mi Perfil</Nav.Link>
                                </Link>
                                <Nav.Link as='span' onClick={logout}>
                                    Cerrar sesión
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <hr className='d-block d-md-none' />
                                <Link to='/iniciar-sesion'>
                                    <Nav.Link as='span'>Iniciar sesión</Nav.Link>
                                </Link>
                                <Link to='/registro'>
                                    <Nav.Link as='span'>Registrarme</Nav.Link>
                                </Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation