import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import fieldsServices from "../../services/field.services"
import './FieldPage.css'
import Loader from "../../components/Loader/Loader"
import FieldList from "../../components/FieldList/FieldList"


const FieldPage = () => {

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
        <>
            <Container>

                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <h1>Listado de Canchas Deportivas</h1>
                            <hr />
                            <FieldList fields={fields} />
                        </>
                }
            </Container>
        </>
    )
}


export default FieldPage