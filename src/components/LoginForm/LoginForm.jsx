import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/auth.context"

import authService from "../../services/auth.services"

import FormError from "../FormError/FormError"


const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState('')
    const { authenticateUser } = useContext(AuthContext)
    const navigate = useNavigate()

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
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.message)
            })
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" placeholder="ejemplo@correo.com" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" value={loginData.password} onChange={handleInputChange} name="password" placeholder="Contraseña" />
                </Form.Group>

                {errors.length > 0 && <FormError><p>{errors}</p></FormError>}

                <div className="d-grid mb-3">
                    <Button type="submit" variant="DPmain" size="lg">Iniciar sesión</Button>
                </div>

            </Form>
            <Link to={'/registro'}>
                < p className="btn-link">¿No tienes cuenta? Regístrate aquí</p>
            </Link>
        </>
    )
}


export default LoginForm