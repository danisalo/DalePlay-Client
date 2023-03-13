import { useState } from "react"
import { Button, Form } from "react-bootstrap"

import authService from "../../services/auth.services"
import uploadServices from "../../services/upload.services"

import FormError from "../FormError/FormError"

import './RegisterForm.css'


const RegisterForm = ({ fireFinalActions }) => {

    const [registerData, SetRegisterData] = useState({
        username: '',
        password: '',
        email: '',
        imageUrl: ''
    })

    const [errors, setErrors] = useState([])
    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { value, name } = e.target
        SetRegisterData({ ...registerData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        authService
            .register(registerData)
            .then(({ data }) => {
                fireFinalActions()
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
        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-4" controlId="username">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" value={registerData.username} onChange={handleInputChange} name="username" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={registerData.password} onChange={handleInputChange} name="password" placeholder="Contraseña" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={registerData.email} onChange={handleInputChange} name="email" placeholder="ejemplo@correo.com" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="image">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid mb-4">
                <Button variant="dark" type="submit" size="lg" disabled={loadingImage}>Registrarme</Button>
            </div>

        </Form>
    )

}


export default RegisterForm