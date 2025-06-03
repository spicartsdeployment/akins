import React, { useState } from "react";
import "./EventsAndGallery.css";
import { partnerLogos } from "../../components/constant";

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState("Latest");

  // Reorder based on tab
  const getOrderedImages = () => {
    if (activeTab === "Latest") return [...partnerLogos];
    if (activeTab === "Popular") return [...partnerLogos].reverse();
    return partnerLogos;
  };

  const orderedImages = getOrderedImages();

  return (
    <div className="gallery-container">
      <div className="filter-buttons">
        <button
          className={activeTab === "Latest" ? "active" : ""}
          onClick={() => setActiveTab("Latest")}
        >
          Latest
        </button>
        <button
          className={activeTab === "Popular" ? "active" : ""}
          onClick={() => setActiveTab("Popular")}
        >
          Popular
        </button>
      </div>

      <div className="gallery-grid">
        {orderedImages.map((src, index) => (
          <div
            key={index}
            className={`grid-item ${index === 8 ? "text-label" : `size-${(index % 6) + 1}`}`}
          >
            {index === 8 ? (
              <h2>All<br />Images</h2>
            ) : (
              <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
