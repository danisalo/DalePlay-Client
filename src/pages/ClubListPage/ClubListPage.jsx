import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

import clubServices from '../../services/club.services'
import Loader from "../../components/Loader/Loader"

import ClubList from "../../components/ClubList/ClubList"

import './ClubListPage.css'


const ClubListPage = () => {

    const [clubs, setClubs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { loadClub() }, [])

    const loadClub = () => {

        clubServices
            .getClubs()
            .then(({ data }) => {
                console.log(data)
                setClubs(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadClub()
    }

    return (
        <div className="pt-5">
            <Container className="pt-5">
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <h2>Listado de Clubs</h2>
                            <ClubList clubs={clubs} />
                        </>
                }
            </Container>
        </div>
    )
}


export default ClubListPage