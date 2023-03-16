import { Row, Button } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'

import './GoBack.css'


const GoBack = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <Row>
            <div className="mb-2 goBack">
                <Link>
                    <Button onClick={goBack} variant="DPoutline">Volver</Button>
                </Link>
            </div>
        </Row>
    )
}


export default GoBack