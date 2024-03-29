import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

import ProfileGames from "../../components/ProfileGames/ProfileGames"
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader"


const MyProfilePage = () => {

    const { user_id } = useParams()

    return (
        <div className="pt-4">
            <Container className="pt-5">
                <div className="pt-4">
                    <ProfileHeader user_id={user_id} />
                    <ProfileGames user_id={user_id} />
                </div>
            </Container>
        </div>
    )
}


export default MyProfilePage