import { Col } from "react-bootstrap"
import ClubCard from "../ClubCard/ClubCard"
import './ClubList.css'


const ClubList = ({ clubs }) => {

    return (
        <>
            {
                clubs?.map(elm => {
                    return (
                        <Col key={elm._id} sm={{ span: 6 }} md={{ span: 3 }}>
                            <ClubCard {...elm} />
                        </Col>
                    )
                })
            }
        </>
    )
}


export default ClubList