import { Card, Col, Row } from "react-bootstrap"
import './EventCardProfile.css'


const EventCardProfile = ({ name, timeStart, playMinTotal, players }) => {


    return (
        <>

            <Card className="mb-4 EventCard">
                <Card.Img variant="top" />
                <Card.Body>
                    <Row>
                        <Col>
                            <p>{name}</p>
                            <p>{timeStart}</p>
                        </Col>
                    </Row>
                    <Row>

                        {players.map(elm => {
                            return (
                                <Col md={{ span: 3 }} key={elm._id}>
                                    <img src={elm.imageUrl} alt={elm.username} />
                                </Col>
                            )
                        })}

                    </Row>



                </Card.Body>
            </Card>

        </>
    )
}

export default EventCardProfile