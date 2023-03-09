import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"


import clubServices from '../../services/club.services'


const ClubDetailsPage = () => {

    const [club, setClub] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { club_id } = useParams()


    useEffect(() => { loadClub() }, [])

    const loadClub = () => {

        clubServices
            .getOne(club_id)
            .then(({ data }) => {
                setClub(data)
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
                <h2>Detalles del club</h2>
                <p>club.name: {club.name}</p>

            </Container>
        </div>
    )
}


export default ClubDetailsPage