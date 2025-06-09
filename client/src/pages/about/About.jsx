import React, { useState } from 'react';
import { cardData, IMAGES, milestoneData, testimonialsData, VIDEOS } from '../../components/constant';
import './About.css';
import CascadingImageSlider from '../../components/common-components/cascadingImgContainer/CascadingImgContainer';
import ScrollObserver from '../../components/common-components/intersectObserver/IntersectObserver';
import TestimonialsSlider from '../../components/common-components/testimonials/Testimonials';
import MilestoneTimeline from '../../components/common-components/milestones/MilestoneTimeline';

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState('vision');
    const [selectedYear, setSelectedYear] = useState(milestoneData[0]);

    return (
        <div>
            {/* ✅ Existing Section */}
            <section className="about-coe">
                <div className="about-container">
                    <div className="about-text">
                        <div>
                            <h2 className='section-title'>About Us</h2>
                            <p>
                                Akin delivers integrated defense technology solutions, that are innovative, ensure mission
                                outcomes, and create strategic advantage across every domain of modern warfare.
                            </p>
                        </div>
                        <button className="btn-primary gradient-btn-primary abt-cntc-btn">Contact Us</button>
                    </div>
                    <div className="about-image">
                        <img src={IMAGES.Madam} alt="About Center of Excellence" loading="lazy"/>
                    </div>
                </div>
            </section>

            <ScrollObserver>
                {/* ✅ Newly Integrated Drone Section */}
                <section className="about-drone-section">
                    <div className="about-tab-container">
                        <div
                            className={`about-tab ${activeTab === 'mission' ? 'active' : ''}`}
                            onClick={() => setActiveTab('mission')}
                        >
                            Our Mission
                        </div>
                        <div
                            className={`about-tab ${activeTab === 'vision' ? 'active' : ''}`}
                            onClick={() => setActiveTab('vision')}
                        >
                            Our Vision
                        </div>
                    </div>

                    <div className="about-drone-content">
                        <img src={IMAGES.Madam} alt="Drone" className="about-drone-image" loading="lazy"/>
                        <div className="about-drone-text-con">
                            <div className='about-drone-text'>
                                <p>
                                    At Akin, we take pride in being a trusted drone technology partner. Our drones are designed,
                                    engineered, and assembled in India, with in-house software development and a carefully managed
                                    supply chain. This allows us to deliver secure, reliable, and high-performance aerial systems
                                    tailored for mission-critical operations.
                                </p>
                                <p>
                                    Each drone we produce reflects our commitment to innovation, quality, and long-term trust
                                    with government and enterprise clients.
                                </p>
                            </div>

                            <button className="btn-primary about-join-button">Want to Join Us?</button>
                        </div>
                    </div>
                </section>
            </ScrollObserver>


            <ScrollObserver>
                {/* Milestones */}
                {/* <section>
                    <div className="milestone-container">
                        <h2 className="section-title">Milestones</h2>
                        <div className="milestone-sidebar">
                            {milestoneData.map((milestone, index) => (
                                <>
                                    <div
                                        key={milestone.year}
                                        className={`milestone-item ${selectedYear.year === milestone.year ? 'active' : 'inactive-item'}`}
                                        onClick={() => setSelectedYear(milestone)}
                                    >
                                        <span className={`milestone-bullet ${selectedYear.year === milestone.year ? 'milestone-first' : ''}`}>
                                            {selectedYear.year === milestone.year ? milestone.year : '•'}
                                        </span>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="milestone-content">
                            <h2>{selectedYear.year}</h2>
                            <p>{selectedYear.description}</p>
                        </div>
                    </div>
                </section> */}
                <MilestoneTimeline />
            </ScrollObserver>

            <ScrollObserver>
                <CascadingImageSlider cardData={cardData} />
            </ScrollObserver>

            <ScrollObserver>
                {/* Explore Services */}
                <section className="about-drone-section">
                    <div className="about-expr-content">
                        <img src={IMAGES.Madam} alt="Drone Assembly" className="about-drone-image" loading="lazy"/>
                        <div className="about-drone-text">
                            <h2 className="about-drone-heading">
                                Our products are designed,<br /> assembled, and supported in <br /> the India.
                            </h2>
                            <p>
                                At Akin, we take pride in being a trusted drone technology partner.
                                Our drones are designed, engineered, and assembled in India, with
                                in-house software development and a carefully managed supply chain.
                                This allows us to deliver secure, reliable, and high-performance
                                aerial systems tailored for mission-critical operations.
                            </p>
                            <p>
                                Each drone we produce reflects our commitment to innovation, quality,
                                and long-term trust with government and enterprise clients.
                            </p>
                            <button className="btn-primary explr-serv-btn">Explore Services</button>
                        </div>
                    </div>
                </section>
            </ScrollObserver>

            <ScrollObserver>
                <TestimonialsSlider title="Latest from Akin" testimonialsData={testimonialsData} />
            </ScrollObserver>

            <ScrollObserver>
                {/* About Us - Join us */}
                <section className="abt-us-cta-video-section">
                    <video
                        className="abt-us-background-video"
                        src={VIDEOS.Forest}
                        autoPlay loop muted playsInline
                    />

                    <div className="abt-us-cta-overlay">
                        <h2 className="abt-us-cta-heading">Join Us on Our Journey to Innovation!</h2>
                        <a href="#contact" className="abt-us-cta-button">Contact us Today</a>
                    </div>
                </section>
            </ScrollObserver>
        </div>
    );
};

export default AboutUs;