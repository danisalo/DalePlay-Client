// import { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import ClubList from "../../components/ClubList/ClubList"
import './ClubPage.css'



const ClubListPage = () => {

    return (
        <>
            <Container>
                <h1>Listado de Clubs</h1>
                <hr />
                <ClubList /*clubs={clubs}*/ />
            </Container>
        </>
    )
}

export default ClubListPage