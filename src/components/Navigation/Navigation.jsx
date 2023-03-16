import { useContext } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'

const Navigation = () => {
    const { user, logout } = useContext(AuthContext)

    return (
        <Navbar bg='light' variant='light' expand='md' id='fixed'>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <h4 id='logo'>Dale Play</h4>
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
                                <Link to={`/miperfil/${user._id}`} className='mx-2'>
                                    <Button variant="DPmain">Mi Perfil</Button>
                                </Link>
                                <Link onClick={logout} to="/" className='mx-2'>
                                    <Button variant="DPoutline">Cerrar sesión</Button>
                                </Link>
                            </>
                        ) : (
                            <div className='gap-2'>
                                <hr className='d-block d-md-none' />
                                <Link to='/iniciar-sesion' className='mx-2'>
                                    <Button variant="DPmain">Iniciar sesión</Button>
                                </Link>
                                <Link to='/registro' className='mx-2'>
                                    <Button variant="DPoutline">Registrarme</Button>
                                </Link>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation