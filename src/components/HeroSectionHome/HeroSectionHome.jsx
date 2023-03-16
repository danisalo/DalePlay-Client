import { Row, Col, Carousel } from "react-bootstrap"

import './HeroSectionHome.css'

function HeroSectionHome() {

    const carouselImages = [
        "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg",
        "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"
    ]

    return (
        <section id="homeHero">
            <Row>
                <Col>
                    <Carousel>
                        {carouselImages.map((url, index) => (
                            <Carousel.Item interval={2500} key={index}>
                                <img src={url} alt={index} className="d-block w-100" />
                                {index === 0 ? (
                                    <div className="carousel-text">
                                        <h2>Únete a la diversión</h2>
                                        <h5>Juega al fútbol, vóleyball, báloncesto y pádel con gente nueva</h5>
                                    </div>
                                ) : index === 1 ? (
                                    <div className="carousel-text">
                                        <h2>Haz deporte en tu tiempo libre</h2>
                                        <h5>Encuentra partidas abiertas de lo que mas te gusta</h5>
                                    </div>
                                ) : (
                                    <div className="carousel-text">
                                        <h2>Juega con gente como tú</h2>
                                        <h5>Encuentra partidas abiertas para todos los niveles en tu ciudad</h5>
                                    </div>
                                )}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </section>
    )
}


export default HeroSectionHome