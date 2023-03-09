import { useEffect, useState } from "react"
import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import clubServices from '../../services/club.services'
import Loader from "../Loader/Loader"

import FieldList from '../FieldList/FieldList'


const FieldsClub = () => {

    const [club, setClub] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { club_id } = useParams()

    useEffect(() => { loadField() }, [])

    const loadField = () => {

        clubServices
            .getOne(club_id)
            .then(({ data }) => {
                setClub(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadField()
    }

    return (
        <Container>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <div >
                        <h2 className='mb-4'>Canchas disponibles</h2>
                        <FieldList fields={club.fields} />
                    </div>
            }
        </Container>
    )
}


export default FieldsClub