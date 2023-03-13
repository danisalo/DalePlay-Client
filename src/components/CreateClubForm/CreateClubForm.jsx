import { useState } from "react"
import { Form, Button } from "react-bootstrap"

import clubsServices from '../../services/club.services'
import uploadServices from "../../services/upload.services"

import FormError from "../FormError/FormError"


const CreateClubForm = ({ fireFinalActions }) => {

    const [clubData, setClubData] = useState({
        name: '',
        description: '',
        location: '',
        imageUrl: '',
    })

    const [errors, setErrors] = useState([])
    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { value, name } = e.target
        setClubData({ ...clubData, [name]: value })
    }

    const handleClubSubmit = e => {

        e.preventDefault()

        clubsServices
            .createClub(clubData)
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
                setClubData({ ...clubData, imageUrl: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    return (
        <Form onSubmit={handleClubSubmit}>

            <Form.Group className="mb-4" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" value={clubData.name} onChange={handleInputChange} placeholder="Club Deportivo" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="description" value={clubData.description} onChange={handleInputChange} placeholder="Descripción" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="location">
                <Form.Label>Ubicación</Form.Label>
                <Form.Control type="text" name="location" value={clubData.location} onChange={handleInputChange} placeholder="Ubicación" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="image">
                <Form.Label>Portada</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid mb-4">
                <Button variant="dark" type="submit" size="lg">Agregar club</Button>
            </div>

        </Form>
    )
}


export default CreateClubForm