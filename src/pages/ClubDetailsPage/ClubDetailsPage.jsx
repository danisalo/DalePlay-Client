import { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import { Link, useParams, useNavigate } from 'react-router-dom'

import { AuthContext } from "../../contexts/auth.context"

import Loader from "../../components/Loader/Loader"
import GoBack from "../../components/GoBack/GoBack"
import CreateFieldForm from "../../components/CreateFieldForm/CreateFieldForm"
import FieldsClub from "../../components/FieldsClub/FieldsClub"

import clubServices from '../../services/club.services'

import './ClubDetailsPage.css'


const ClubDetailsPage = () => {

    const [club, setClub] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [roleID, setRoleId] = useState('')

    const { user } = useContext(AuthContext)

    const { club_id } = useParams()

    useEffect(() => {
        loadClub()
        const roleData = user?._id
        setRoleId(roleData)
    }, [club_id, user])

    const navigate = useNavigate()

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

    const fireFinalActions = () => {
        setShowModal(false)
        loadClub()
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
                            <GoBack />
                            <Row id="hero" className="mb-4">
                                <Col md={{ span: 3 }}>
                                    <figure style={{ backgroundImage: `url(${club.imageUrl})` }} />
                                </Col>
                                <Col md={{ span: 9 }}>
                                    <Row>
                                        <Col md={{ span: 12 }} >
                                            <Row>
                                                <div className="mb-4">
                                                    <div className="mb-4">
                                                        <h2 className="mb-2">{club.name}</h2>
                                                        <h6>{club.description}</h6>
                                                    </div>
                                                    <h5>Ubicación:</h5>
                                                    <p className="text-left">{club.address}</p>
                                                    <a id="openMap" href={`https://www.google.com/maps/search/?api=1&query=${club.address}`} target="_blank">Abrir en Google Maps</a>
                                                </div>
                                            </Row>

                                            {club.owner == roleID
                                                ?
                                                < Row >
                                                    <Col xs={{ span: 4 }}>
                                                        <Link className="d-grid mb-2">
                                                            <Button onClick={() => setShowModal(true)} variant="DPmain">Agregar Campo</Button>
                                                        </Link>
                                                    </Col>
                                                    <Col xs={{ span: 4 }}>
                                                        <Link to={`/clubs/editar/${club_id}/`} className="d-grid mb-2">
                                                            <Button variant="DPoutline">Editar Club</Button>
                                                        </Link>
                                                    </Col>
                                                    <Col xs={{ span: 4 }} className="d-grid">
                                                        <Link className="d-grid mb-2">
                                                            <Button onClick={() => deleteClub(club._id)} variant="DPdanger" >Eliminar Club</Button>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                                :
                                                <></>
                                            }
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <hr />
                            <Row className="mb-4">
                                <Col>
                                    <FieldsClub fields={club.fields} />
                                </Col>
                            </Row>
                        </div>
                }
            </Container >
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton> <Modal.Title>Agrear Unidad Deportiva</Modal.Title></Modal.Header>
                <Modal.Body>
                    <CreateFieldForm fireFinalActions={fireFinalActions} club_id={club_id} />
                </Modal.Body>
            </Modal>
        </div >
    )
}


export default ClubDetailsPage