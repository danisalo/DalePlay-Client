import { useEffect, useState } from "react"
import { Container } from 'react-bootstrap'

import clubServices from '../../services/club.services'
import Loader from "../Loader/Loader"

import ClubList from '../ClubList/ClubList'

import './ClubsHome.css'


const ClubsHome = () => {

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
        <Container className='homepage'>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <div className='AvailableClubsHome'>
                        <h2 className='mb-4'>Clubes Populares</h2>
                        <ClubList clubs={clubs} />
                    </div>
            }
        </Container>
    )
}


export default ClubsHome