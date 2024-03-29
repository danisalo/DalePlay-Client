import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Link } from 'react-router-dom'

import fieldsServices from "../../services/field.services"
import Loader from "../../components/Loader/Loader"

import FieldList from "../../components/FieldList/FieldList"


const FieldListPage = () => {

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

    return (
        <>
            <Container>

                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <h1>Listado de Campos Deportivas</h1>
                            <hr />
                            <FieldList fields={fields} />
                        </>
                }
            </Container>
        </>
    )
}


export default FieldListPage