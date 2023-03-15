import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"

import profileServices from "../../services/profile.services"

import './ProfileHeader.css'


const ProfileHeader = ({ user_id }) => {

    const [user, SetUser] = useState([])

    useEffect(() => {
        loadUserData()
    }, [user_id])

    const loadUserData = () => {

        profileServices
            .getProfile(user_id)
            .then(response => {
                SetUser(response.data)
            })
            .catch(err => console.log(err))
    }

    let memberSince
    if (user.createdAt) {
        const date = new Date(user.createdAt)
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
                        <img className="avatar" src={user.imageUrl} alt={user.username} />
                    </Col>
                    <Col md={{ span: 10 }}>
                        <h2 className="text-left">{user.firstName} {user.lastName}</h2>
                        <h6><b>Username:</b> {user.username}</h6>
                        <h6><b>Correo:</b> {user.email}</h6>
                        <h6><b>Miembro desde:</b> {memberSince}</h6>
                    </Col>
                </Row >
            </Col >
        </Row >
    )
}

export default ProfileHeader