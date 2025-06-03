import React from 'react'
import "./DroneDesignManufacture.css"
import { IMAGES } from '../../components/constant'

const DroneDesignManufacture = () => {
    return (
        <section class="coming-soon-section">
            <div class="content">
                <h1>Coming Soon</h1>
                <img src={IMAGES.BgDroneImg} alt="Drone Image" class="drone-img" loading="lazy"/>
            </div>
        </section>
    )
}

export default DroneDesignManufacture
