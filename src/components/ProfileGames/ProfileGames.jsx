import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
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
        <Row className="mt-4">
            <hr />
            <h3 className="text-left mb-4">Mis partidas</h3>
            {
                games.data ? games.data.map(elm => {

                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <EventCardProfile _id={elm._id} name={elm.name} timeStart={elm.timeStart} playMinTotal={elm.playMinTotal} players={elm.players} field={elm.field} />
                        </Col>
                    )
                }) : <p>NO HAY PARTIDAS</p>
            }
        </Row>
    )
}

export default ProfileGames