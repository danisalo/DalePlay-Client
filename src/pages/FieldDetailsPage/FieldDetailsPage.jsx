import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

import Loader from '../../components/Loader/Loader'
import fieldsServices from "../../services/field.services"

import WeekTab from "../../components/WeekTab/WeekTab"
import FieldDetail from "../../components/FieldDetail/FieldDetail"


const FieldListPage = () => {

    const { field_id } = useParams()

    const [field, setField] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log(field)

    useEffect(() => {
        loadField()
    }, [])

    const loadField = () => {

        fieldsServices
            .getOne(field_id)
            .then(({ data }) => {
                setField(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <>
                        <Container>
                            <h1>Cancha</h1>

                            <WeekTab field={field} loadField={loadField} />


                        </Container>
                    </>
            }
        </>
    )
}


export default FieldListPage