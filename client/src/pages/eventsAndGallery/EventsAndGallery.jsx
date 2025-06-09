import React, { useState } from "react";
import { IMAGES, partnerLogos, smallRemotePilot, cardData } from "../../components/constant";
import "./EventsAndGallery.css";
import ScrollObserver from '../../components/common-components/intersectObserver/IntersectObserver';
import CascadingImageSlider from '../../components/common-components/cascadingImgContainer/CascadingImgContainer';

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState("Latest");

  const getOrderedImages = () => {
    if (activeTab === "Latest") return [...partnerLogos];
    if (activeTab === "Popular") return [...partnerLogos].reverse();
    return partnerLogos;
  };

  const orderedImages = getOrderedImages();

  return (
    <div className="gallery-container">
      {/* Description container */}
      <section>
        <div className="evnt-gal-container">
          <div className="evnt-gal-text">
            <div>
              <h2>Akin’s Gallery</h2>
              <p>At Akin's Drone Solutions, we believe in user-centered innovation.
                Our drone services are designed with the client in mind, ensuring every solution is customized to meet the specific needs, goals, and industry standards of each project. Whether it's aerial surveying, infrastructure inspection, agricultural monitoring, or media production, we develop flight plans and data strategies that align with your vision and objectives.
                <br />
                <br />
                We actively collaborate with our clients throughout the entire process. Your input guides our work, and your satisfaction drives our results. At Akin’s Drone Solutions, your mission is our flight path.
              </p>

            </div>
            <div className="evnt-gal-btns-container">
              <button className="btn-primary explr-serv-btn">
                Contact Us
              </button>
            </div>
          </div>
          <div className="evnt-gal-img">
            <img
              src={IMAGES.DummyImage}
              alt="About Center of Excellence"
              loading="lazy"
            />
          </div>
        </div>
      </section>


      {/* Gallery */}
      <div className="tab-switch-container">
        <button
          className={`tab-button ${activeTab === "Latest" ? "active" : ""}`}
          onClick={() => setActiveTab("Latest")}
        >
          Latest
        </button>
        <button
          className={`tab-button ${activeTab === "Popular" ? "active" : ""}`}
          onClick={() => setActiveTab("Popular")}
        >
          Popular
        </button>
      </div>

      <div className="gallery-grid">
        {/* partnerLogos to be placed after images */}
        {orderedImages.map((src, index) => {
          const sizeClassLatest = `size-${(index % 6) + 1}`;
          const sizeClassPopular = `size-popular-${(index % 6) + 1}`;
          const sizeClass = activeTab === "Popular" ? sizeClassPopular : sizeClassLatest;
          return (
            <div
              key={index}
              className={`grid-item ${index === 8 ? "text-label" : sizeClass}`}
            >
              {index === 8 ? (
                <h2>All<br />Images</h2>
              ) : (
                <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
              )}
            </div>
          );
        })}
      </div>


      {/* Cascading images */}
      <ScrollObserver>
        <CascadingImageSlider cardData={cardData} />
      </ScrollObserver>

            <ScrollObserver>
        <section className="appointment-section">
          <div className="appointment-container">
            {/* Form Section */}
            <div className="appointment-form">
              <h2>Schedule an Appointment</h2>
              <form>
                <label>
                  Your Name<span>*</span>
                  <input type="text" placeholder="Enter your name" required />
                </label>

                <div className="form-row">
                  <label>
                    Phone Number<span>*</span>
                    <input type="number" placeholder="+91 -" required />
                  </label>

                  <label>
                    Email<span>*</span>
                    <input type="email" placeholder="Enter email" required />
                  </label>
                </div>

                <label>
                  Your Message<span>*</span>
                  <textarea placeholder="Enter your message" required></textarea>
                </label>

                <button type="submit">Submit</button>
              </form>
            </div>

            {/* Info Section */}
            <div className="appointment-info">
              <h3>“Drones icheynaaa”</h3>
              <img src={IMAGES.DummyImage} alt="Care" />
            </div>
          </div>
        </section>
      </ScrollObserver>
    </div>
  );
};

export default GalleryGrid;
