import { Container } from 'react-bootstrap'

import AvailableClubsHome from '../../components/AvailableClubsHome/AvailableClubsHome'
import HeroSectionHome from '../../components/HeroSectionHome/HeroSectionHome'
import HowDoesItHome from '../../components/HowDoesItHome/HowDoesItHome'

import './HomePage.css'


const HomePage = () => {

    return (
        <div className='pt-5'>
            <Container className='pt-5'>
                <HeroSectionHome />
                <AvailableClubsHome />
                <HowDoesItHome />
            </Container>
        </div>
    )
}


export default HomePage