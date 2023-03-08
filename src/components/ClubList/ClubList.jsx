import { Row, Col } from "react-bootstrap"
import ClubCard from "../ClubCard/ClubCard"
import './ClubList.css'


const ClubList = ({ clubs }) => {
    return (
        <Row>
            <Col md={{ span: 3 }} >
                <ClubCard />
            </Col>
            <Col md={{ span: 3 }} >
                <ClubCard />
            </Col>
            <Col md={{ span: 3 }} >
                <ClubCard />
            </Col>
            <Col md={{ span: 3 }} >
                <ClubCard />
            </Col>

            {/* {clubs.map(elm => {
                return (
                    <Col md={{ span: 3 }} key={elm._id}>
                        <ClubCard {...elm} />
                    </Col>
                )
            })} */}
        </Row>
    )
}


export default ClubList