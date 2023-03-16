import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useParams, Link, useNavigate } from "react-router-dom"

import Loader from '../../components/Loader/Loader'
import fieldsServices from "../../services/field.services"

import WeekTab from "../../components/WeekTab/WeekTab"
import FieldDetail from "../../components/FieldDetail/FieldDetail"


const FieldListPage = () => {

    const { field_id } = useParams()

    const [field, setField] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

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
                    <>
                        <Container className="pt-4">
                            <div className="pt-4">
                                <div className="pt-4">
                                    <Row>
                                        <Col md={{ span: 9 }}>
                                            <h2 className="text-left pb-4">Reservar partida</h2>
                                        </Col>
                                        <Col md={{ span: 3 }}>
                                            <Link to={`/cancha/editar/${field_id}/`} >
                                                <Button variant="DPoutline" size="sm">Editar Cancha</Button>
                                            </Link>
                                            <div className="mt-2">
                                                <Button onClick={() => deleteField()} variant="DPdanger" size="sm">Eliminar Cancha</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <WeekTab field={field} loadField={loadField} />
                                </div>
                            </div>
                        </Container>
                    </>
            }
        </>
    )
}


export default FieldListPage