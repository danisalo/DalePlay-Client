import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authService from "../../services/auth.services"

const RegisterForm = () => {

    const [registerData, SetRegisterData] = useState({
        email: '',
        password: '',
        username: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        SetRegisterData({ ...registerData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        authService
            .register(registerData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }
    return (


        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" value={registerData.username} onChange={handleInputChange} name="username" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={registerData.password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={registerData.email} onChange={handleInputChange} name="email" />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Registrarme</Button>
            </div>

        </Form>

    )

}

export default RegisterForm