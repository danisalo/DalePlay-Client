import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

import FieldForm from "../../components/CreateFieldForm/CreateFieldForm"

import './CreateFieldPage.css'


const CreateFieldPage = () => {

    const { club_id } = useParams()

    return (
        <div className="pt-4">
            <Container className="text-left pt-4">
                <div className="pt-4">
                    <h2>Añadir cancha</h2>
                    <FieldForm club_id={club_id} />
                </div>
            </Container>
        </div>
    )
}


export default CreateFieldPage