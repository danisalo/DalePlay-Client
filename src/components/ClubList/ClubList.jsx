import { Row } from "react-bootstrap"
import ClubCard from "../ClubCard/ClubCard"

const ClubList = () => {
    return (
        <Row>
            <h1>Esto es ClubList</h1>
            {/*  CLUB CARDS MAP */}
            <ClubCard />
        </Row>
    )
}


export default ClubList