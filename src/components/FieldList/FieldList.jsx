
import { Col, Container, Row } from 'react-bootstrap'
import FieldCard from '../FieldCard/FieldCard'
import './FieldList.css'


const FieldList = ({ fields }) => {
    return (
        <Container>
            <h1>FieldList</h1>
            <Row>
                {
                    fields?.map(elm => {
                        return (
                            <Col md={{ span: 3 }} key={elm._id}>
                                <FieldCard {...elm} />
                            </Col>

                        )
                    })
                }
            </Row>
        </Container>


    )
}


export default FieldList