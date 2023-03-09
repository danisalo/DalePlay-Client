import { Row, Col, Carousel } from "react - bootstrap"
import React, { useState } from 'react'
import './HeroSectionHome.css'


const HeroSectionHome = () => {

    return (
        <Row>
            <Col >
                <section className="hero">
                    <div className="hero-content">
                        <h1 className="blackOps">¡Dale Play!</h1>
                        <p>Bienvenido a la mejor app para que Aldi practique moverse</p>
                    </div>
                </section >
            </Col >
        </Row >
    )
}

export default HeroSectionHome;