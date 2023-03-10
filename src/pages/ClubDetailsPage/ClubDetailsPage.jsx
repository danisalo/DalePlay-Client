import { useEffect, useState } from "react"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { Link, useParams } from 'react-router-dom'

import Loader from "../../components/Loader/Loader"
import FieldsClub from "../../components/FieldsClub/FieldsClub"

import clubServices from '../../services/club.services'

import './ClubDetailsPage.css'

const ClubDetailsPage = () => {

    const [club, setClub] = useState({})
    const [isLoading, setIsLoading] = useState(true)

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

    return (
        <Container>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <>
                        <Row id="hero">
                            <Col md={{ span: 3 }}>
                                <Image fluid rounded src={club.imageUrl} alt="Club image" />
                            </Col>
                            <Col md={{ span: 8 }}>
                                <h2>{club.name}</h2>
                                <p>{club.description}</p>
                                <Link to={`/${club_id}/crear-cancha`} className="d-grid">
                                    <Button variant="dark">Agregar cancha</Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row id="map">
                            <Col>
                                <img src={club.imageUrl} alt="Map" />
                                <h4>Ubicación</h4>
                                <p>Abrir en Google Maps</p>
                            </Col>
                        </Row>
                        <Row id="field">
                            <Col>
                                <FieldsClub fields={club.fields} />
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
}


export default ClubDetailsPage