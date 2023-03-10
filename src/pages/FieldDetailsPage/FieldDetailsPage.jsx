import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import FieldDetail from "../../components/FieldDetail/FieldDetail"
import fieldsServices from "../../services/field.services"
import Loader from '../../components/Loader/Loader'
import WeekTab from "../../components/WeekTab/WeekTab"


const FieldListPage = () => {

    const { field_id } = useParams()

    const [field, setField] = useState([])
    const [isLoading, setIsLoading] = useState(true)


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

                            <WeekTab field={field} />


                        </Container>
                    </>
            }

        </>

    )
}

export default FieldListPage