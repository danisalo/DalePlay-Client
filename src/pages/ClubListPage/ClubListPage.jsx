import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'

import clubServices from '../../services/club.services'

import Loader from "../../components/Loader/Loader"
import ClubList from "../../components/ClubList/ClubList"

import './ClubListPage.css'


const ClubListPage = () => {

    const [clubs, setClubs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { loadClub() }, [])

    const navigate = useNavigate()

    const loadClub = () => {

        clubServices
            .getClubs()
            .then(({ data }) => {
                setClubs(data)
                setIsLoading(false)
            })
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
                            <h2 className="mb-4">Listado de Clubs</h2>
                            <Row>
                                <ClubList clubs={clubs} />
                            </Row>
                            <Row>
                                <Col md={{ span: 3 }}>
                                    <Link to={`/crear-club`}>
                                        <Card className="mb-4 ClubCard">
                                            <Card.Img variant="top" src='{tempImg}' />
                                            <Card.Body className='d-flex flex-column justify-content-between'>
                                                <h4>¿Te gustaría agregar a tu club?</h4>
                                                <div className="d-grid">
                                                    <Button variant="DPmain">Agregar mi club</Button>
                                                </div>
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