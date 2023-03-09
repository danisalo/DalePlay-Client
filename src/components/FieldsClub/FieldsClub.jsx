import { useEffect, useState } from "react"
import { Container } from 'react-bootstrap'

import fieldsServices from '../../services/field.services'
import Loader from "../Loader/Loader"

import FieldList from '../FieldList/FieldList'


const FieldsClub = () => {

    const [fields, setFields] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { loadField() }, [])

    const loadField = () => {

        fieldsServices
            .getFields()
            .then(({ data }) => {
                setFields(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadField()
    }


    return (
        <Container>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <div >
                        <h2 className='mb-4'>Canchas disponibles</h2>
                        <FieldList fields={fields} />
                    </div>
            }
        </Container>
    )
}


export default FieldsClub