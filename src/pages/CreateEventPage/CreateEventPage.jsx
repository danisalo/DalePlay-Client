import { Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import NewEventForm from "../../components/NewEventForm/NewEventForm"
import './CreateEventPage.css'


const CreateEventPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/clubs')
    }

    return (
        <>
            <Container>
                <h1>Crea una partida</h1>

                <NewEventForm fireFinalActions={fireFinalActions} />
            </Container>
        </>
    )
}


export default CreateEventPage