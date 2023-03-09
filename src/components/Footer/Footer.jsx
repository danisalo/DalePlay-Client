import { Link } from 'react-router-dom'

import './Footer.css'


const Footer = () => {

    return (
        <footer className='mt-4'>
            <div>
                <Link>
                    <img src="https://www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png" alt="IG Icon" />
                </Link>
                <Link>
                    <img src="https://www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png" alt="IG Icon" />
                </Link>
                <Link>
                    <img src="https://www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png" alt="IG Icon" />
                </Link>
            </div >
            <div className='mt-2 copyright'>
                <p className='mt-2 copyright'>© Dale Play 2023</p>
            </div>
        </footer >
    )
}


export default Footer