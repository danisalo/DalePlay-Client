import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import clubServices from '../../services/club.services'
import Loader from "../Loader/Loader"

import ClubList from '../ClubList/ClubList'

import './ClubsHome.css'


const ClubsHome = () => {

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

    const fireFinalActions = () => {
        loadClub()
    }

    const tempImg = 'https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg'

    return (
        <Container className='homepage'>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <div className='ClubsHome'>
                        <h2 className='mt-2 mb-4'>Clubes Populares</h2>
                        <Row>
                            <ClubList className='mt-4' clubs={clubs.slice(0, 3)} />
                            <Col key='Clubs' sm={{ span: 6 }} md={{ span: 3 }}>
                                <Link to={`/clubs`}>
                                    <Card className="mb-4 ClubCard">
                                        <Card.Img variant="top" src={tempImg} />
                                        <Card.Body className='d-flex flex-column justify-content-between'>
                                            <h4>¿Quieres ver todos los clubs disponibles?</h4>
                                            <Link to={`/clubs`} className="d-grid">
                                                <Button variant="DPmain">Ver clubs</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Link >
                            </Col>
                        </Row>
                    </div>
            }
        </Container>
    )
}


export default ClubsHome