import React from 'react'
import "./DroneDesignManufacture.css"
import { IMAGES } from '../../components/constant'

const DroneDesignManufacture = () => {
    return (
        <section className="coming-soon-section">
            <div className="content">
                <h1>Coming Soon</h1>
                <img src={IMAGES.BgDroneImg} alt="Drone Image" className="drone-img" loading="lazy"/>
            </div>
        </section>
    )
}

export default DroneDesignManufacture
