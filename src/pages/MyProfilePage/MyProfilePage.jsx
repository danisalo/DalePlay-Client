import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ProfileGames from "../../components/ProfileGames/ProfileGames"
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader"
import './MyProfilePage.css'


const MyProfilePage = () => {


    const { user_id } = useParams()
    console.log(user_id)

    return (
        <>
            <Container>
                <ProfileHeader user_id={user_id} />
                <ProfileGames user_id={user_id} />
            </Container>
        </>
    )
}


export default MyProfilePage