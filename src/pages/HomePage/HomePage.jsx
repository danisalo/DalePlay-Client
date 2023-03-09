import { Container } from 'react-bootstrap'

import ClubsHome from '../../components/ClubsHome/ClubsHome'
import HeroSectionHome from '../../components/HeroSectionHome/HeroSectionHome'
import HowDoesItHome from '../../components/HowDoesItHome/HowDoesItHome'

import './HomePage.css'


const HomePage = () => {

    return (
        <div className='pt-5'>
            <Container className='pt-5'>
                <HeroSectionHome />
                <ClubsHome />
                <HowDoesItHome />
            </Container>
        </div>
    )
}


export default HomePage