import { Link } from 'react-router-dom'

import './Footer.css'


const Footer = () => {

    return (
        <footer className='footer'>
            <div>
                <Link to='https://www.instagram.com' target='_blank'>
                    <img className='socialIcon mx-2' src="https://res.cloudinary.com/dle7ctrmn/image/upload/v1678827231/Instagram_jkdzpp.svg" alt="Instagram Icon" />
                </Link>
                <Link to='https://web.whatsapp.com' target='_blank'>
                    <img className='socialIcon mx-2' src="https://res.cloudinary.com/dle7ctrmn/image/upload/v1678827231/WhatsApp_asg6wk.svg" alt="WhatsApp Icon" />
                </Link>
                <Link to='https://www.tiktok.com/en' target='_blank'>
                    <img className='socialIcon mx-2' src="https://res.cloudinary.com/dle7ctrmn/image/upload/v1678827230/TikTok_duw3nh.svg" alt="TikTok Icon" />
                </Link>
            </div >
            <div className='mt-4'>
                <p className='mt-4 copyright'>© Dale Play 2023</p>
            </div>
        </footer >
    )
}


export default Footer