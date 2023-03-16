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
                                        <Card.Img variant="top" src='https://res.cloudinary.com/dle7ctrmn/image/upload/v1678992867/DIFF_20BALLS_20AND_20RACKETS_20-_20shutterstock_217282633_p0qd22.jpg' />
                                        <Card.Body className='d-flex flex-column justify-content-between'>
                                            <h4 className="text-left">¿Quieres ver todos los clubs disponibles?</h4>
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