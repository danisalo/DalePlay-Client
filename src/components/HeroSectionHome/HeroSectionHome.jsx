import { Row, Carousel } from "react-bootstrap"
import React, { useState } from 'react'
import './HeroSectionHome.css'


function HeroSectionHome() {
    const tempImg = "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"
    return (
        <Row>
            <Carousel>
                <Carousel.Item /* interval={2000} */ className="Carousel">
                    <img
                        className="d-block w-100"
                        src={tempImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="blackOps">Únete a la diversión</h3>
                        <p>Juega al fútbol, vóleyball, báloncesto y pádel con gente nueva</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item /* interval={2000} */ className="Carousel">
                    <img
                        className="d-block w-100"
                        src={tempImg}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className="blackOps">Haz deporte en tu tiempo libre</h2>
                        <p>Encuentra partidas abiertas de lo que mas te gusta</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item /* interval={2000} */ className="Carousel">
                    <img
                        className="d-block w-100"
                        src={tempImg}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="blackOps">Juega con gente como tú</h1>
                        <p>Encuentra partidas abiertas para todos los niveles en tu ciudad</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Row>
    )
}


export default HeroSectionHome;