import { useEffect, useState, useContext } from "react"
import { Col, Row, Button } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth.context'

import profileServices from "../../services/profile.services"

import './ProfileHeader.css'


const ProfileHeader = ({ user_id }) => {

    const [userData, setUserData] = useState([])
    const { user, logout } = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        loadUserData()
    }, [user_id])

    const loadUserData = () => {

        profileServices
            .getProfile(user_id)
            .then(response => {
                setUserData(response.data)
            })
            .catch(err => console.log(err))
    }

    const deleteUser = () => {
        logout()
        deleteProfile(user_id)
    }

    const deleteProfile = (user_id) => {

        profileServices
            .deleteProfile(user_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    let memberSince
    if (userData.createdAt) {
        const date = new Date(userData.createdAt)
        const month = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date)
        const year = date.getFullYear()
        memberSince = `${month} de ${year}`
    } else {
        memberSince = 'Fecha de registro desconocida'
    }

    return (
        <Row>
            <Col>
                <Row>
                    <Col md={{ span: 2 }}>
                        <img className="avatar" src={userData.imageUrl} alt={userData.username} />
                    </Col>
                    <Col md={{ span: 10 }}>
                        <h2 className="text-left">{userData.firstName} {userData.lastName}</h2>
                        <Row>
                            <Col md={{ span: 10 }}>
                                <h6><b>Username:</b> {userData.username}</h6>
                                <h6><b>Correo:</b> {userData.email}</h6>
                                <h6><b>Miembro desde:</b> {memberSince}</h6>
                            </Col>
                            <Col md={{ span: 2 }}>
                                <Link to={`/editar/${user_id}/`} className="d-grid">
                                    <Button variant="DPoutline">Editar Perfil</Button>
                                </Link>
                                <div className="d-grid mt-2">
                                    <Button onClick={() => deleteUser()} variant="DPdanger" >Eliminar Perfil</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Col >
        </Row >
    )
}

export default ProfileHeader