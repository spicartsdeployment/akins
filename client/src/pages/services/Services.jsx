// src/components/MappingServiceSection.jsx

import React from "react";
import "./Services.css"; // make sure to create this file
import { IMAGES, VIDEOS } from "../../components/constant";
import ScrollObserver from "../../components/common-components/intersectObserver/IntersectObserver";
import HoverImageList from "../../components/hoverImageSwitcher/HoverImageSwitcher";
import ProductOverview from "../../components/productOverview/ProductOverview";

const topLogos = [
    { src: IMAGES.DummyImage, alt: 'DroneDeploy' },
    { src: IMAGES.DummyImage, alt: 'Pix4D' },
    { src: IMAGES.DummyImage, alt: 'Trimble Business Center' },
    { src: IMAGES.DummyImage, alt: 'Bentley' }
];

const bottomLogos = [
    { src: IMAGES.DummyImage, alt: 'Trimble' },
    { src: IMAGES.DummyImage, alt: 'EMLID' },
    { src: IMAGES.DummyImage, alt: 'Point One' },
    { src: IMAGES.DummyImage, alt: 'Swift Navigation' },
    { src: IMAGES.DummyImage, alt: 'HxGN SmartNet' }
];

const Services = () => {
    return (
        <>
            <section className="akin-services-mapping">
                <video
                    className="akin-services-bg-video"
                    src={VIDEOS.HomeBackgroundVid}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="akin-services-content">
                    <h4 className="akin-services-subtitle">Surveying and Mapping</h4>
                    <h2 className="akin-services-title">
                        Precision on<br />another level
                    </h2>
                    <p className="akin-services-description">
                        Skydio drones let you complete complex mapping and surveying missions
                        <br />
                        in any environment with the accuracy of RTK/PPK technology.
                    </p>
                    <button className="btn-primary akin-services-btn">Get started</button>
                </div>
            </section>

            <ScrollObserver>
                <section className="akin-services-workflow">
                    <div className="akin-services-container">
                        <p className="akin-services-intro">
                            Mapping and surveying with Skydio drones streamlines precise data
                            capture tasks with automation-powered efficiencies — unlocking
                            significant cost-savings and scaling advantages at every step.
                        </p>

                        <h2 className="akin-services-heading">
                            Make every step of your <br className="mobile-break" />
                            workflow, work better
                        </h2>

                        <div className="akin-services-image-wrapper">
                            <img
                                // src={workflowImage}
                                src={IMAGES.DummyImage}
                                alt="Mapping workflow"
                                className="akin-services-workflow-image"
                            />
                        </div>
                    </div>
                </section>
            </ScrollObserver>

            {/* Unlock effieciency */}
            <section className="efficiency">
                <div className="efficiency__container">

                    {/* Top Title */}
                    <h2 className="efficiency__title">Unlock efficiency powered by automation</h2>

                    {/* Top Grid */}
                    <div className="efficiency__top">
                        <div className="efficiency__image-large">
                            <img src={IMAGES.DummyImage} alt="Map with overlays" />
                        </div>
                        <div className="efficiency__image-small">
                            <img src={IMAGES.DummyImage} alt="Drone scanning terrain" />
                            <p>
                                AI-powered Skydio drones simplify any mission with autonomous
                                data capture and 360° obstacle avoidance. Since anyone can fly
                                them, you get more done in less time with your existing workforce.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Grid */}
                    <h3 className="efficiency__subtitle">Put every detail within reach</h3>
                    <div className="efficiency__bottom">
                        <div className="efficiency__image-large">
                            <img src={IMAGES.DummyImage} alt="Drone mission planning UI" />
                        </div>
                        <div className="efficiency__image-small">
                            <img src={IMAGES.DummyImage} alt="Drone controller screen" />
                            <p>
                                Get a complete picture of any area or subject with best-in-class
                                sensors and easy access to hard-to-reach vantage points enabling
                                survey-grade accuracy.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* Hover on text for images */}
            <ScrollObserver>
                <HoverImageList />
            </ScrollObserver>

            <ScrollObserver>
                <section className="integration-wrapper">
                    <h2 className="integration-heading">
                        Seamless integration with the <br /> systems you know and trust
                    </h2>

                    <div className="logo-row">
                        {topLogos.map((logo, i) => (
                            <img key={i} src={logo.src} alt={logo.alt} className="integration-logo" />
                        ))}
                    </div>

                    <p className="integration-note">
                        Works with the most popular GNSS correction sources and more using NTRIP Rev1
                    </p>

                    <div className="logo-row">
                        {bottomLogos.map((logo, i) => (
                            <img key={i} src={logo.src} alt={logo.alt} className="integration-logo" />
                        ))}
                    </div>
                </section>
            </ScrollObserver>

            <ScrollObserver>
                <ProductOverview/>
            </ScrollObserver>
        </>
    );
};

export default Services;
