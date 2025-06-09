import React from 'react';
import './ProductOverview.css';
import { IMAGES } from '../constant';

const topProducts = [
  {
    title: "Skydio X10",
    img: IMAGES.DummyImage
  },
  {
    title: "VT300-L Sensor Package",
    img: IMAGES.DummyImage
  },
  {
    title: "RTK/PPK GPS",
    img: IMAGES.DummyImage
  }
];

const apps = [
  { name: "Onboard Modeling", icon: IMAGES.DummyImage },
  { name: "Map Capture", icon: IMAGES.DummyImage },
  { name: "Fleet Manager", icon: IMAGES.DummyImage },
  { name: "Media Sync", icon: IMAGES.DummyImage }
];

const services = [
  { name: "Skydio Care", icon: IMAGES.DummyImage },
  { name: "Skydio Academy", icon: IMAGES.DummyImage }
];

const ProductOverview = () => {
  return (
    <section className="product-wrapper">
      <div className="product-grid">
        {topProducts.map((product, i) => (
          <div className="product-card" key={i}>
            <img src={product.img} alt={product.title} className="product-img" />
            <p className="product-title">{product.title}</p>
          </div>
        ))}
      </div>

      <div className="product-bottom">
        <div className="apps-section">
          <h4>Apps</h4>
          {apps.map((app, i) => (
            <div key={i} className="app-item">
              <img src={app.icon} alt={app.name} />
              <span>{app.name}</span>
            </div>
          ))}
        </div>

        <div className="services-section">
          <h4>Services</h4>
          {services.map((service, i) => (
            <div key={i} className="app-item">
              <img src={service.icon} alt={service.name} />
              <span>{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
