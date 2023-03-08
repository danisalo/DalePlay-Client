import ClubList from '../ClubList/ClubList'
import './AvailableClubsHome.css'


const AvailableClubsHome = () => {
    return (
        <div className='AvailableClubsHome'>
            <h2 className='blackOps mb-4'>Clubes Populares</h2>
            <ClubList />
        </div>
    )
}


export default AvailableClubsHome