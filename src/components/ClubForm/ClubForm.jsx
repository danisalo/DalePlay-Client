import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import clubsServices from '../../services/club.services'

const ClubForm = () => {

    const [clubData, setClubData] = useState({
        name: '',
        description: '',
        location: '',
        imageUrl: '',
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setClubData({ ...clubData, [name]: value })
    }

    const handleClubSubmit = e => {
        e.preventDefault()

        clubsServices
            .createClub(clubData)
            .then(({ data }) => { console.log(data) })
            .catch(err => console.log(err))
    }



    return (

        <Form onSubmit={handleClubSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del Club Deportivo:</Form.Label>
                <Form.Control type="text" name="name" value={clubData.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción:</Form.Label>
                <Form.Control type="text" name="description" value={clubData.description} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
                <Form.Label>Ubicación:</Form.Label>
                <Form.Control type="text" name="location" value={clubData.location} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Foto:</Form.Label>
                <Form.Control type="text" name="imageUrl" value={clubData.imageUrl} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="dark" type="submit">Crear club</Button>
        </Form>

    )
}

export default ClubForm