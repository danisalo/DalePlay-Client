import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

import FieldForm from "../../components/CreateFieldForm/CreateFieldForm"

import './CreateFieldPage.css'


const CreateFieldPage = () => {

    const { club_id } = useParams()

    return (
        <>
            <Container className="formTitle">
                <h2>CreateFieldPage</h2>
                <FieldForm club_id={club_id} />
            </Container>
        </>
    )
}


export default CreateFieldPage