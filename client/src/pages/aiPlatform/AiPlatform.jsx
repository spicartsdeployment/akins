import React from 'react'
import "./AiPlatform.css"
import { IMAGES } from '../../components/constant'

const AiPlatform = () => {
    return (
        <section class="coming-soon-section">
            <div class="content">
                <h1>Coming Soon</h1>
                <img src={IMAGES.BgDroneImg} alt="Drone Image" class="drone-img" />
            </div>
        </section>
    )
}

export default AiPlatform
