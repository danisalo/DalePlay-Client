
import { useContext, useEffect, useState } from "react"
import { Container, Modal, Button } from "react-bootstrap"
import ClubList from "../../components/ClubList/ClubList"


const ClubListPage = () => {

    return (
        <>
            <Container>
                <h1>Listado de Clubs</h1>
                <hr />
                <ClubList clubs={clubs} />
            </Container>
        </>
    )
}

export default ClubListPage