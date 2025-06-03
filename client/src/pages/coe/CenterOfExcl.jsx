import React from 'react'
import "./CenterOfExcl.css"
import { coeSessionsData, coeTestimonials, IMAGES, partnerLogos, VIDEOS } from '../../components/constant';
import WhatWeOffer from '../../components/whatWeOffer/Trainings';
import EnquiryNow from '../../components/enquiryNow/EnquiryNow';
import FaqSection from '../../components/faq/FAQ'
import ReusableMediaSlider from '../../components/common-components/reusableMediaSlicer/ReusableMediaSlicer';
import ScrollObserver from '../../components/common-components/intersectObserver/IntersectObserver';
import TestimonialsSlider from '../../components/common-components/testimonials/Testimonials';
// import CoeSessions from '../../components/ceoSessions/CeoSessions';

const CenterOfExcellence = () => {
    //   const divs = Array.from({ length: 99 }, (_, i) => (
    //     <div key={i}>This is div #{i + 1}</div>
    //   ));

    return (
        <div className='ceo-main-cont'>
            <section className="ceo-home-training">
                <video
                    className="ceo-home-bg-video"
                    src={VIDEOS.HomeBackgroundVid}
                    autoPlay loop muted playsInline
                />
                <div className="ceo-home-content">
                    <h2 className="ceo-home-heading">
                        Elevate Your Drone Career with Akin’s Premier Training Hub
                    </h2>
                    <button className="btn-primary ceo-home-enquiry-btn">
                        Enquiry Now
                    </button>
                </div>
            </section>


            <ScrollObserver>
                <section className="about-coe">
                    <div className="about-container">
                        <div className="about-coe-text">
                            <h2>About COE</h2>
                            <p>
                                Our Center of Excellence is more than a training hub - it's a mission-driven ecosystem empowering SHG women,
                                enabling safe and smart farming for rural India, and nurturing next-gen drone talent among students and young
                                professionals. Certified for RPTO standards and aligned with national skilling goals..
                            </p>
                        </div>
                        <div className="about-ceo-image">
                            <img src={IMAGES.COEaboutimage} alt="About Center of Excellence" loading="lazy"/>
                        </div>
                    </div>
                </section>
            </ScrollObserver>

            <ScrollObserver>
                <ReusableMediaSlider sectionTitle="Why Us" mediaData={coeSessionsData} visibleCount={3} />
            </ScrollObserver>

            {/* What we Offer trainings */}
            <ScrollObserver>
                <WhatWeOffer />
            </ScrollObserver>


            {/* Testimonials */}
            <ScrollObserver>
                <TestimonialsSlider title="Testimonials" testimonialsData={coeTestimonials} />
            </ScrollObserver>

            {/* Partnerships */}
            <ScrollObserver>
                <section className="partnerships-section">
                    <h2 className="partnerships-header">Partnerships</h2>
                    <div className="partners-inner-con">
                        <h2>Trusted Over 2k+ <br /> Companies</h2>
                        <div className="logos-scroll-wrapper">
                            <div className="logos-scroll-track">
                                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                                    <div className="logo-item" key={index}>
                                        <img
                                            src={logo}
                                            alt='partner-logos'
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollObserver>
            
            {/* COE Enquiry Form */}
            <ScrollObserver>
                <EnquiryNow />
            </ScrollObserver>

            <ScrollObserver>
                <FaqSection/>
            </ScrollObserver>
            
        </div>
    );
}

export default CenterOfExcellence
