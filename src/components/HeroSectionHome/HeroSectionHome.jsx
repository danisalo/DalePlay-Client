import { Row, Col, Carousel } from "react-bootstrap"

import './HeroSectionHome.css'

function HeroSectionHome() {

    const carouselImages = [
        "https://res.cloudinary.com/dle7ctrmn/image/upload/v1678991196/Campo-de-Futbol_dd1dia.png",
        "https://res.cloudinary.com/dle7ctrmn/image/upload/v1678991651/Canchas-de-Padel_cmmtqa.png",
        "https://res.cloudinary.com/dle7ctrmn/image/upload/v1678992014/Cancha-de-Volley_zybytm.png"
    ]

    return (
        <section id="homeHero">
            <Row>
                <Col>
                    <Carousel>
                        {carouselImages.map((url, index) => (
                            <Carousel.Item interval={2500} key={index}>
                                <img src={url} alt={index} />
                                {index === 0 ? (
                                    <div className="carousel-text">
                                        <h2 className="mb-4">Únete a la diversión</h2>
                                        <h5>Juega al fútbol, vóleyball, pádel y mucho más.</h5>
                                    </div>
                                ) : index === 1 ? (
                                    <div className="carousel-text">
                                        <h2 className="mb-4">Juega en tu tiempo libre</h2>
                                        <h5>Encuentra partidas abiertas de lo que mas te gusta.</h5>
                                    </div>
                                ) : (
                                    <div className="carousel-text">
                                        <h2 className="mb-4">Practica con gente como tú</h2>
                                        <h5>Encuentra deportistas de todos los niveles en tu ciudad.</h5>
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