import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'


const FormError = ({ children }) => {
    const [show, setShow] = useState(true)

    if (show) {
        return (
            <Alert variant="DPdanger">
                <Alert.Heading>¡Ha ocurrido un error!</Alert.Heading>
                {children}
            </Alert>
        )
    }
}


export default FormError