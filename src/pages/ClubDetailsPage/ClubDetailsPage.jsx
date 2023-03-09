import { useEffect, useState } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { useParams } from "react-router-dom"

import FieldsClub from "../../components/FieldsClub/FieldsClub"

import clubServices from '../../services/club.services'

import './ClubDetailsPage.css'

const ClubDetailsPage = () => {

    const [club, setClub] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { club_id } = useParams()


    useEffect(() => { loadClub() }, [])

    const loadClub = () => {

        clubServices
            .getOne(club_id)
            .then(({ data }) => {
                setClub(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadClub()
    }

    const tempImg = "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"

    return (
        <Container>
            <Row id="hero">
                <Col md={{ span: 3 }}>
                    <Image fluid rounded src={tempImg} alt="Club image" />
                </Col>
                <Col md={{ span: 8 }}>
                    <h2>{club.name}</h2>
                    <p>{club.description}</p>
                </Col>
            </Row>
            <Row id="map">
                <Col>
                    <img src={tempImg} alt="Map" />
                    <h4>Ubicación{club.location}</h4>
                    <p>Abrir en Google Maps</p>
                </Col>
            </Row>
            <Row id="field">
                <Col>
                    <FieldsClub />
                </Col>
            </Row>
        </Container>
    )
}


export default ClubDetailsPage