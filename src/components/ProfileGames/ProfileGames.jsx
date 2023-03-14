import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import eventsServices from "../../services/events.services"
import EventCardProfile from "../EventCardProfile/EventCardProfile"


const ProfileGames = ({ user_id }) => {

    const [games, SetGames] = useState([])

    useEffect(() => {
        loadGamesData()
    }, [])

    const loadGamesData = () => {

        eventsServices
            .getUserEvents(user_id)
            .then(data => SetGames(data),)
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <Row>
                {
                    games.data?.map(elm => {

                        return (
                            <Col md={{ span: 3 }} key={elm._id}>
                                <EventCardProfile name={elm.name} timeStart={elm.timeStart} playMinTotal={elm.playMinTotal} players={elm.players} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default ProfileGames