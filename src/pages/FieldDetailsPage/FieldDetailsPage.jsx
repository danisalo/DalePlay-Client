import { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useParams, Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"

import Loader from '../../components/Loader/Loader'
import fieldsServices from "../../services/field.services"
import WeekTab from "../../components/WeekTab/WeekTab"
import clubsServices from "../../services/club.services"


const FieldListPage = () => {

    const { field_id } = useParams()

    const [field, setField] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [userId, setUserId] = useState('')
    const [clubData, setClubData] = useState([])

    const { user } = useContext(AuthContext)


    useEffect(() => {
        loadField()
        const userData = user?._id
        setUserId(userData)
        findClub(field_id)
    }, [field_id, user])


    const navigate = useNavigate()


    const loadField = () => {

        fieldsServices
            .getOne(field_id)
            .then(({ data }) => {
                setField(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const findClub = (field_id) => {

        clubsServices
            .getClubByField(field_id)
            .then(({ data }) =>
                setClubData(data[0]))
            .catch(err => console.log(err))

    }

    console.log('esta es la data que tengo aqui', clubData)

    const deleteField = () => {

        fieldsServices
            .deleteField(field_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <div className="pt-4">
                        <Container className="pt-4">
                            <div className="pt-4">
                                <div className="pt-4">
                                    <Row>
                                        <Col md={{ span: 9 }}>
                                            <h2 className="text-left pb-4">Reservar partida</h2>
                                        </Col>

                                        {userId == clubData.owner
                                            ?
                                            <Col md={{ span: 3 }}>
                                                <Link to={`/cancha/editar/${field_id}/`} >
                                                    <Button variant="DPoutline" size="sm">Editar Cancha</Button>
                                                </Link>
                                                <div className="mt-2">
                                                    <Button onClick={() => deleteField()} variant="DPdanger" size="sm">Eliminar Cancha</Button>
                                                </div>
                                            </Col>
                                            :
                                            <></>
                                        }

                                    </Row>
                                    <WeekTab field={field} loadField={loadField} />
                                </div>
                            </div>
                        </Container>
                    </div>
            }
        </>
    )
}


export default FieldListPage