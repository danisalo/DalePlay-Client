import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'


const FormError = ({ children }) => {
    const [show, setShow] = useState(true)

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>¡Ha ocurrido un error!</Alert.Heading>
                {children}
            </Alert>
        )
    }
}


export default FormError