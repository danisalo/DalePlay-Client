import { Row, Col, Carousel, Button, C } from "react-bootstrap"
import React, { useState } from 'react'
import './HeroSectionHome.css'

function HeroSectionHome() {

    const carouselImages = [
        "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg",
        "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg",
        "https://fastly.4sqi.net/img/general/600x600/61298733_eutk9aS2xcYaqQSD0T8XiNXDx1TPeMat2C-UKr0RFoc.jpg"
    ]

    return (
        <section >
            <Row>
                <Col>
                    <Carousel>
                        {carouselImages.map((url, index) => (
                            <Carousel.Item interval={2500} key={index}>
                                <img src={url} alt="" />
                                {index === 0 ? (
                                    <div className="carousel-text">
                                        <h2>Únete a la diversión</h2>
                                        <h6>Juega al fútbol, vóleyball, báloncesto y pádel con gente nueva</h6>
                                    </div>
                                ) : index === 1 ? (
                                    <div className="carousel-text">
                                        <h2>Haz deporte en tu tiempo libre</h2>
                                        <h6>Encuentra partidas abiertas de lo que mas te gusta</h6>
                                    </div>
                                ) : (
                                    <div className="carousel-text">
                                        <h2>Juega con gente como tú</h2>
                                        <h6>Encuentra partidas abiertas para todos los niveles en tu ciudad</h6>
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