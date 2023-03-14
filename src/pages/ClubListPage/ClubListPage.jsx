import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

import clubServices from '../../services/club.services'
import Loader from "../../components/Loader/Loader"

import ClubList from "../../components/ClubList/ClubList"

import './ClubListPage.css'


const ClubListPage = () => {

    const [clubs, setClubs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { loadClub() }, [])

    const loadClub = () => {

        clubServices
            .getClubs()
            .then(({ data }) => {
                setClubs(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }


    const tempImg = 'https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg'

    return (
        <div className="pt-4">
            <Container className="pt-4">
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <div className="pt-4">
                            <h2>Listado de Clubs</h2>
                            <Row>
                                <ClubList clubs={clubs} />
                            </Row>
                            <Row>
                                <Col md={{ span: 3 }}>
                                    <Link to={`/clubs`}>
                                        <Card className="mb-4 ClubCard">
                                            <Card.Img variant="top" src={tempImg} />
                                            <Card.Body>
                                                <h4>¿Te gustaría agregar a tu club?</h4>
                                                <Link to={`/clubs`} className="d-grid">
                                                    <Button variant="DPmain">Agregar mi club</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Link >
                                </Col>
                            </Row>
                        </div>
                }
            </Container>
        </div>
    )
}


export default ClubListPage