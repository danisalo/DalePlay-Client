import { Container } from "react-bootstrap"
import FieldForm from "../../components/CreateFieldForm/CreateFieldForm"
import './CreateFieldPage.css'


const CreateFieldPage = () => {



    return (
        <>
            <Container className="formTitle">
                <h2>CreateFieldPage</h2>
                <FieldForm />
            </Container>
        </>
    )
}


export default CreateFieldPage