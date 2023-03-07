import { useContext, useEffect, useState } from "react"
import { Container, Row, Form, Button } from "react-bootstrap"
import './CreateClubPage.css'


const CreateClubPage = () => {

    return (
        <Container>
            <Form>
                <Form.Group className="mb-2">
                    <Form.Label>Nombre del Club Deportivo</Form.Label>
                    <Form.Control type="text" placeholder="Club Deportivo" />
                    <Form.Text className="text-muted">
                        Introduzca aquí el nombre de su Club Deportivo
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción" />
                    <Form.Text className="text-muted">
                        Introduzca aquí la descripción de su Club Deportivo
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción" />
                    <Form.Text className="text-muted">
                        Introduzca aquí la descripción de su Club Deportivo
                    </Form.Text>
                </Form.Group>
                {/* LOCATION */}
                {/* IMAGE */}
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}


export default CreateClubPage