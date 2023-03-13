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
            .then(data => SetUser(data))
            .catch(err => console.log(err))

    }
    console.log(user)

    return (
        <Row>
            <Col xs={{ span: 3, offset: 3 }} className="d-flex justify-content-center">
                <p>{user.data.email}</p>
            </Col>
            <Col className="d-flex justify-content-center" xs={6} >
                <h2>Bern Vera</h2>

            </Col>
        </Row>
    )
}

export default ProfileHeader