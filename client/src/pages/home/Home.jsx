// src/pages/Home/Home.jsx
import React from "react";
// import Seo from "../../components/seo/SEO";
import "./Home.css";
import ScrollObserver from "../../components/intersectObserver/IntersectObserver";
import { Button } from "../../components/buttons/Buttons";
import { FaArrowRight } from "react-icons/fa";
import { droneAcquisitionData, features, insightsData, testimonialsData } from "../../components/Constant";

const Home = () => {

  return (
    <div className="landing-page routes-con">
      {/* ========== Hero Section ========== */}
      <ScrollObserver>
        <section className="hero section">
          <div className='hero-content'>
            {/* <h1>Transform <span className="gradient-text">Government Sector</span> <br /> With Your Data</h1> */}
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


            {/* Government Sector
Enterprise Sector
Defence Sector
Agriculture Sector */}
            <p>
              Akin Analytics delivers next-gen aerial intelligence — combining AI-powered drone analytics,
              RPTO-based pilot training, and custom drone manufacturing to drive precision and
              innovation across industries
            </p>

            <div className="hero-main-btns-cont">
              {/* <Button text="Gradient Border" bgColor='transparent' gradientBorder gradientColors={['#ff6a00', '#ee0979']} /> */}
              <button className="btn-primary gradient-btn-primary">Talk With Us <FaArrowRight className="right-arrow-icon" /></button>
              <button className="btn-primary learn-more-no-brd">Learn More <FaArrowRight className="right-arrow-icon" /></button>
            </div>
          </div>
        </section>
      </ScrollObserver>

      <ScrollObserver>
        <section className="hero section">
          <div className='rec-section-cont'>
            <h1>As Recognized by</h1>
            <p>
              Akin Analytics delivers next-gen aerial intelligence — combining AI-powered drone analytics,
              RPTO-based pilot training, and custom drone manufacturing to drive precision and
              innovation across industries
            </p>
          </div>
        </section>
      </ScrollObserver>

      <ScrollObserver>
        <section className="section">
          <div className='strategy-section-cont'>
            <h1> From Sky to Strategy</h1>
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
                  <button className={product.button.classNames} href={product.button.link}>{product.button.text} {product.button.icon && <FaArrowRight className="right-arrow-icon" />}</button>
                </div>
                <div className="feature-image">
                  <img src={product.image} alt={product.title} />
                </div>
              </div>
            </div>
          ))}
        </section>
      </ScrollObserver>

      <ScrollObserver>
        <section className="drone-acquisition-section-cont">
          <div className='drone-acq-cont'>
            <h1>Drone Acquisition- Data Insights</h1>
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
                  <img className="acq-feature-img" src={aqu.image} alt={aqu.title} />
                </div>
              </div>
            ))}
          </div>

          {/* Insights Section */}
          <div className="insight-section">
            <h1>Insights</h1>
            <div className="insight-cards">
              {insightsData.map((aqu, index) => (
                <div className="insight-card" key={index}>
                  <div className="insight-content">
                    <p className="insights-description">{aqu.title}</p>
                    <img className="insight-img" src={aqu.image} alt={aqu.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollObserver>

      <ScrollObserver>
        {/* Testimonials Section */}
        <section className="testimonial-section">
          <h1 className="testimonial-title">Testimonials</h1>
          <div className="testimonial-grid">
            {testimonialsData.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-content">
                  <p className="testimonial-text">"{item.testimonial}"</p>
                  <img className="testimonial-avatar" src={item.image} alt={item.name} />
                  <h2 className="testimonial-name">{item.name}</h2>
                  <p className="testimonial-role">{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollObserver>

      <ScrollObserver>
        <section className='home-enquiry-section-cont'>
          <h1>The Future of <span className="home-enq-ino">Innovation</span> Begins with <span className="home-enq-akin">Akin</span></h1>
          <button className="btn-primary">Enquiry Now <FaArrowRight className="right-arrow-icon" />
          </button>
        </section>
      </ScrollObserver>
    </div>
  );
};

export default Home;
