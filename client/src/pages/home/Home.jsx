import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ScrollObserver from "../../components/common-components/intersectObserver/IntersectObserver";
import Seo from "../../components/common-components/seo/Seo";
import TestimonialsSlider from "../../components/common-components/testimonials/Testimonials";
import { coeTestimonials, droneAcquisitionData, features, insightsData, partnerLogos, testimonialsData, VIDEOS } from "../../components/constant";
import "./Home.css";

const Home = () => {

  return (
    <>
      <Seo
        description="Explore our diverse products designed to meet your business needs."
        keywords="products, myapp"
      />
      <div>
        {/* ========== Hero Section ========== */}
        <ScrollObserver>
          <section className="hero section">
            <video
              className="hero-bg-video"
              src={VIDEOS.HomeBackgroundVid}
              autoPlay loop muted playsInline
            />
            <div className='hero-content'>
              <h1 className="heading">
                Transform <span className="gradient-roller">
                  <span className="roller-track">
                    <span>Government Sector</span>
                    <span>Enterprise Sector</span>
                    <span>Defence Sector</span>
                    <span>Agriculture Sector</span>
                  </span>
                </span>
                <br /> With Your Data
              </h1>

              <p>
                Akin Analytics delivers next-gen aerial intelligence — combining AI-powered drone analytics,
                RPTO-based pilot training, and custom drone manufacturing to drive precision and
                innovation across industries
              </p>

              <div className="hero-main-btns-cont">
                <button className="btn-primary btn-arrow gradient-btn-primary">Talk With Us <FaArrowRight className="right-arrow-icon" /></button>
                <button className="btn-primary btn-arrow learn-more-no-brd">Learn More <FaArrowRight className="right-arrow-icon" /></button>
              </div>
            </div>
          </section>
        </ScrollObserver>

        <ScrollObserver>
          <section className="hero section">
            <div className='rec-section-cont'>
              <h1 className="section-title">As Recognized by</h1>
              <p>
                Our Visionary work has been recognized by Leading Stakeholders in the Ecosystem
              </p>

              <div className="home-partners-inner-con">
                <h2>Trusted Over 2k+ <br /> Companies</h2>
                <div className="home-logos-scroll-wrapper">
                  <div className="home-logos-scroll-track">
                    {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                      <div className="home-logo-item" key={index}>
                        <img
                          src={logo}
                          alt="home-logo"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollObserver>

        <ScrollObserver>
          <section className="section">
            <div className='strategy-section-cont'>
              <h1 className="section-title"> From Sky to Strategy</h1>
              <p>

                <span className="orange-clr">
                  Akin Analytics
                </span> Utilizes Advanced Drone Technology to Capture
                Crucial Data, Providing Comprehensive Analytics to Drive Your
                Company's Success.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="akin-features">
            {features.map((product, index) => (
              <div className={`feature-card ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
                <div className="content">
                  <div className="feature-desc">
                    <div>
                      <h2>{product.title}</h2>
                      <p className="description">{product.description}</p>
                      {product.tagline && <p className="tagline">{product.tagline}</p>}
                    </div>
                    <a className={product.button.classNames} href={product.button.link}>
                      {product.button.text}
                      {product.button.icon && <FaArrowRight className="right-arrow-icon" />}
                    </a>
                  </div>
                  <div className="feature-image">
                    {product.mediaType === 'video' ? (
                      <video autoPlay loop muted playsInline src={product.image} alt={product.title} />
                    ) : (
                      <img src={product.image} alt={product.title} loading="lazy"/>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>

        </ScrollObserver>

        <ScrollObserver>
          <section className="drone-acquisition-section-cont">
            <div className='drone-acq-cont'>
              <h1 className="section-title">Data Acquisition - Data Insights</h1>
              <p>
                Integrating state-of-the-art computer vision to deliver real-time insights, automate field
                operations, and drive data-driven decision-making at scale
              </p>
            </div>

            {/* Drone Acquisition Section */}
            <div className="drone-acquisition-section">
              {droneAcquisitionData.map((aqu, index) => (
                <div className="drone-acq-feature-card" key={index}>
                  <div className="content">
                    <div className="acq-feature-desc">
                      <h2 className="acq-title">{aqu.title}</h2>
                      <p className="acq-header">{aqu.header}</p>
                      <p className="acq-description">{aqu.description}</p>
                    </div>
                    {aqu.mediaType === 'video' ? (
                      <video autoPlay loop muted playsInline src={aqu.image} alt={aqu.title} />
                    ) : (
                      <img src={aqu.image} alt={aqu.title} loading="lazy"/>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Insights Section */}
            <div className="insight-section">
              <h1 className="section-title">Insights</h1>
              <div className="insight-cards">
                {insightsData.map((aqu, index) => (
                  <div className="insight-card" key={index}>
                    <div className="insight-content">
                      <p className="insights-description">{aqu.title}</p>
                      <img className="insight-img" src={aqu.image} alt={aqu.title} loading="lazy"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollObserver>

        {/* Testimonials Section */}
        <ScrollObserver>
          <TestimonialsSlider title="Testimonials" testimonialsData={coeTestimonials} />
        </ScrollObserver>

        <ScrollObserver>
          <section className='home-enquiry-section-cont'>
            <h1>The Future of <span className="home-enq-ino">Innovation</span> Begins with <span className="home-enq-akin">Akin</span></h1>
            <button className="btn-primary btn-arrow">Enquiry Now <FaArrowRight className="right-arrow-icon" />
            </button>
          </section>
        </ScrollObserver>
      </div>
    </>
  );
};

export default Home;
