import { Container } from 'react-bootstrap'

import FieldList from '../FieldList/FieldList'


const FieldsClub = ({ fields }) => {

    return (
        <Container>
            <div >
                <h2 className='mb-4'>Campos disponibles</h2>
                <FieldList fields={fields} />
            </div>
        </Container>
    )
}


export default FieldsClub