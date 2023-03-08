import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import ClubList from "../../components/ClubList/ClubList"
import Loader from "../../components/Loader/Loader"
import './ClubPage.css'
import clubServices from '../../services/club.services'


const ClubPage = () => {


    const [clubs, setClubs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { loadClub() }, [])

    const loadClub = () => {

        clubServices
            .getClubs()
            .then(({ data }) => {
                setClubs(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadClub()
    }

    return (
        <>
            <Container>

                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <h1>Listado de Clubs</h1>
                            <hr />
                            <ClubList clubs={clubs} />
                        </>
                }
            </Container>
        </>
    )
}


export default ClubPage