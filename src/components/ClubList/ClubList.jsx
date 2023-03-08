import { Row, Col } from "react-bootstrap"
import ClubCard from "../ClubCard/ClubCard"
import './ClubList.css'

const ClubList = ({ clubs }) => {
    return (
        <Row>
            <h1>Esto es ClubList</h1>
            {
                clubs.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <ClubCard {...elm} />
                        </Col>
                    )
                })
            }

        </Row>
    )
}


export default ClubList