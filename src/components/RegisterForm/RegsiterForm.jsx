import { useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

import authService from "../../services/auth.services"
import uploadServices from "../../services/upload.services"

import FormError from "../FormError/FormError"


const RegisterForm = () => {

    const [registerData, SetRegisterData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        imageUrl: ''
    })

    const [errors, setErrors] = useState([])
    const [loadingImage, setLoadingImage] = useState(false)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        SetRegisterData({ ...registerData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        authService
            .register(registerData)
            .then(() => {
                navigate('/iniciar-sesion')
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                SetRegisterData({ ...registerData, imageUrl: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    return (
        <>
            <Form onSubmit={handleFormSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-2" controlId="firstName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={registerData.firstName} onChange={handleInputChange} name="firstName" placeholder="Nombre" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-2" controlId="lastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" value={registerData.lastName} onChange={handleInputChange} name="lastName" placeholder="Apellido" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" value={registerData.username} onChange={handleInputChange} name="username" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" value={registerData.password} onChange={handleInputChange} name="password" placeholder="Contraseña" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={registerData.email} onChange={handleInputChange} name="email" placeholder="ejemplo@correo.com" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="image">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="file" onChange={handleFileUpload} />
                </Form.Group>

                {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

                <div className="d-grid mb-2">
                    <Button variant="DPmain" type="submit" size="lg" disabled={loadingImage}>Registrarme</Button>
                </div>

            </Form>
            <Link to={'/iniciar-sesion'}>
                <p className="btn-link">Ya tienes cuenta? Inicia sesión</p>
            </Link>
        </>
    )

}


export default RegisterForm