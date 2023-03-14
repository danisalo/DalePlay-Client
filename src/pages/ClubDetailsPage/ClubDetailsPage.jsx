import { useEffect, useState } from "react"
import { Container, Row, Col, Image, ButtonGroup, Button } from "react-bootstrap"
import { Link, useParams, useNavigate } from 'react-router-dom'

import Loader from "../../components/Loader/Loader"
import FieldsClub from "../../components/FieldsClub/FieldsClub"

import clubServices from '../../services/club.services'

import './ClubDetailsPage.css'

const ClubDetailsPage = () => {

    const [club, setClub] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const { club_id } = useParams()

    useEffect(() => { loadClub() }, [club_id])

    const loadClub = () => {

        clubServices
            .getOne(club_id)
            .then(({ data }) => {
                setClub(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const deleteClub = (club_id) => {

        clubServices
            .deleteClub(club_id)
            .then(() => navigate('/clubs'))
            .catch(err => console.log(err))
    }

    return (
        <div className="pt-4">
            <Container className="pt-4">
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <div className="pt-4">
                            <Row id="hero">
                                <Col md={{ span: 3 }}>
                                    <Image fluid rounded src={club.imageUrl} alt="Club image" />
                                </Col>
                                <Col md={{ span: 8 }}>
                                    <div className="mb-4">
                                        <h2>{club.name}</h2>
                                        <p>{club.description}</p>
                                        <h5>Ubicación:</h5>
                                        <p>Los Chorros, Miranda</p>
                                        <a id="openMap" href={`https://www.google.com/maps/search/?api=1&query=${club.name}`} target="_blank">Abrir en Google Maps</a>
                                    </div>
                                    <div className="d-grid">
                                        <Link to={`/${club_id}/crear-cancha`} className="d-grid">
                                            <Button variant="dark">Agregar Cancha</Button>
                                        </Link>
                                        <Link to={`/${club_id}/editar`} className="d-grid">
                                            <Button variant="warning">Editar Club</Button>
                                        </Link>
                                        <Button onClick={() => deleteClub(club._id)} variant="danger">Eliminar Club</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row id="field">
                                <Col>
                                    <FieldsClub fields={club.fields} />
                                </Col>
                            </Row>
                        </div>
                }
            </Container>
        </div>
    )
}


export default ClubDetailsPage