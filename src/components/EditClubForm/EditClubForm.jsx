import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"

import clubsServices from '../../services/club.services'
import uploadServices from "../../services/upload.services"

import FormError from "../FormError/FormError"


const EditClubForm = ({ fireFinalActions }) => {

    const [clubData, setClubData] = useState({
        name: '',
        description: '',
        location: '',
        imageUrl: '',
    })

    const [errors, setErrors] = useState([])
    const [loadingImage, setLoadingImage] = useState(false)
    const navigate = useNavigate()

    const { club_id } = useParams()

    const handleInputChange = e => {
        const { value, name } = e.target
        setClubData({ ...clubData, [name]: value })
    }

    useEffect(() => {
        getOne(club_id)
    }, [])

    const getOne = (club_id) => {
        clubsServices
            .getOne(club_id)
            .then(({ data }) => { setClubData(data) })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleClubSubmit = e => {
        e.preventDefault()

        clubsServices
            .editClub(club_id, clubData)
            .then(() => {
                navigate('/clubs')
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
                setErrors(err.response.data.errorMessages)
                setLoadingImage(false)
            })
    }

    return (
        <Form onSubmit={handleClubSubmit}>

            <Form.Group className="mb-4" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" value={clubData.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="description" value={clubData.description} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="location">
                <Form.Label>Ubicación</Form.Label>
                <Form.Control type="text" name="location" value={clubData.location} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="image">
                <Form.Label>Portada</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid mb-4">
                <Button variant="DPmain" type="submit" size="lg">Guardar cambios</Button>
            </div>

        </Form>
    )
}


export default EditClubForm