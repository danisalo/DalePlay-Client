import { Container } from 'react-bootstrap'

import AvailableClubsHome from '../../components/AvailableClubsHome/AvailableClubsHome'
import HeroSectionHome from '../../components/HeroSectionHome/HeroSectionHome'
import HowDoesItHome from '../../components/HowDoesItHome/HowDoesItHome'

import './HomePage.css'


const HomePage = () => {

    return (
        <>
            <Container className='homepage'>
                <HeroSectionHome />
                <AvailableClubsHome />
                <HowDoesItHome />
            </Container>
        </>
    )
}


export default HomePage