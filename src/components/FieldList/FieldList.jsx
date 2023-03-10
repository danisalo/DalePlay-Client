import { Row, Col } from 'react-bootstrap'
import FieldCard from '../FieldCard/FieldCard'
import './FieldList.css'


const FieldList = ({ fields }) => {

    return (
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
    )
}


export default FieldList