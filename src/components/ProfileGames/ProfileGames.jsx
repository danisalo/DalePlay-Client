import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import eventsServices from "../../services/events.services"
import EventCardProfile from "../EventCardProfile/EventCardProfile"


const ProfileGames = ({ user_id }) => {

    const [games, setGames] = useState([])
    const [hasGames, setHasGames] = useState(false)

    useEffect(() => { loadGamesData() }, [])

    const loadGamesData = () => {

        eventsServices
            .getUserEvents(user_id)
            .then(elm => setGames(elm.data),)
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (games.length > 0) { setHasGames(true) }
        else { setHasGames(false) }
    }, [games])


    return (
        <Row className="pt-5">
            <hr />
            <h3 className="text-left mb-4 pt-2 pb-1">Mis partidas</h3>
            {
                hasGames ? games.map(elm => {

                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <EventCardProfile _id={elm._id} name={elm.name} timeStart={elm.timeStart} playMinTotal={elm.playMinTotal} players={elm.players} field={elm.field} />
                        </Col>
                    )
                }) : <p>No tienes ninguna partida</p>
            }
        </Row>

    )
}

export default ProfileGames