import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import authService from "../../services/auth.services"
import './LoginForm.css'


const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-4" controlId="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" placeholder="ejemplo@correo.com" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={loginData.password} onChange={handleInputChange} name="password" placeholder="Contraseña" />
            </Form.Group>

            <div className="d-grid mb-4">
                <Button type="submit" variant="dark" size="lg">Iniciar sesión</Button>
            </div>

        </Form>
    )
}

export default LoginForm