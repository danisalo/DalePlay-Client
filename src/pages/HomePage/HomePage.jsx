import ClubsHome from '../../components/ClubsHome/ClubsHome'
import HeroSectionHome from '../../components/HeroSectionHome/HeroSectionHome'
import HowDoesItHome from '../../components/HowDoesItHome/HowDoesItHome'


const HomePage = () => {

    return (
        <div className="pt-4">
            <HeroSectionHome />
            <ClubsHome />
            <HowDoesItHome />
        </div>
    )
}


export default HomePage