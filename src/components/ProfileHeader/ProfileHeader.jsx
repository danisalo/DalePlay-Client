import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import profileServices from "../../services/profile.services"


const ProfileHeader = ({ user_id }) => {

    const [user, SetUser] = useState({})

    useEffect(() => {
        loadUserData()
    }, [])

    const loadUserData = () => {

        profileServices
            .getProfile(user_id)
            .then(response => SetUser(response))
            .catch(err => console.log(err))
        console.log({ user })
    }

    return (
        <Row>
            <Col>
                {/* <h4>Perfil de {user.data.firstName}{user.data.lastName}</h4> */}
                {/* <h4>{user.data.username}</h4> */}
            </Col>
        </Row>
    )
}

export default ProfileHeader