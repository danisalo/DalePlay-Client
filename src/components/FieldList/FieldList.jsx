import { Row, Col } from 'react-bootstrap'

import FieldCard from '../FieldCard/FieldCard'

import './FieldList.css'


const FieldList = ({ fields }) => {

    return (
        <Row>
            {
                fields?.map(elm => {
                    return (
                        <Col key={elm._id} sm={{ span: 6 }} md={{ span: 3 }}>
                            <FieldCard {...elm} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}


export default FieldList