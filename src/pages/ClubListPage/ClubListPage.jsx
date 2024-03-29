import { useContext, useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from "../../contexts/auth.context"
import clubServices from '../../services/club.services'

import Loader from "../../components/Loader/Loader"
import GoBack from "../../components/GoBack/GoBack"
import ClubList from "../../components/ClubList/ClubList"


const ClubListPage = () => {

    const [clubs, setClubs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [role, setRole] = useState('')

    const { user } = useContext(AuthContext)


    useEffect(() => {
        loadClub()
        const roleData = user?.role
        setRole(roleData)
    }, [user])

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


    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className="pt-5">
            <Container className="pt-5">
                <goBack />
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <div className="pt-4">
                            <h2 className="mb-5 pb-2">Listado de Clubs</h2>
                            <Row>
                                <ClubList clubs={clubs} />
                            </Row>



                            {role == 'ADMIN'
                                ?
                                <>
                                    <Row>
                                        <Col md={{ span: 3 }}>
                                            <Link to={`/crear-club`}>
                                                <Card className="mb-4 ClubCard">
                                                    <Card.Img variant="top" src="" />
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
                                </>
                                :
                                <></>
                            }
                        </div>

                }
            </Container>
        </div>
    )
}


export default ClubListPage