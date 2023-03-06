import './Footer.css'

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'light',
        color: 'light'
    }
    return (
        <footer style={footerStyle}>
            <div>
                <img src="https://www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png" alt="IG Icon" />
                <img src="https://www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png" alt="IG Icon" />
                <img src="https://www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png" alt="IG Icon" />
            </div>
            <div>
                <p>© Dale Play 2200</p>
            </div>
        </footer>
    )
}

export default Footer