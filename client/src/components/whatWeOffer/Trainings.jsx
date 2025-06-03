import React, { useState } from 'react';
import './Trainings.css';
import { IMAGES, useCaseData } from '../constant';
import { useNavigate } from 'react-router-dom';

const tabs = [
  {
    label: 'Small RPC',
    header: 'Small Remote Pilote Training',
    key: 'small',
    img: IMAGES.DummyImage,
    steps: [
      {
        title: 'Duration',
        bullets: ['5 Days']
      },
      {
        title: 'Training Modules',
        bullets: [
          'Assembly and calibration',
          'Basic maneuvers',
          'Simulated flying',
          'Hands-on control',
          'Battery safety and landing'
        ]
      },
      {
        title: 'Completion Test',
        bullets: ['Completion test & certification']
      }
    ]
  },
  {
    label: 'Medium RPC',
    header: 'Medium Remote Pilote Training',
    key: 'medium',
    img: IMAGES.DummyImage,
    steps: [
      {
        title: 'Advanced Systems',
        bullets: ['Advanced flight control systems & regulations']
      },
      {
        title: 'Autonomous Features',
        bullets: [
          'Mission planning software',
          'GPS waypoint navigation',
          'Payload handling',
          'Diagnostics and logs',
          'Emergency override'
        ]
      },
      {
        title: 'Autonomous Flight',
        bullets: ['Autonomous flight missions & diagnostics']
      }
    ]
  },
  {
    label: 'Small and Medium RPC',
    header: 'Small and Medium Remote Pilote Training',
    key: 'combined',
    img: IMAGES.DummyImage,
    steps: [
      {
        title: 'Foundations & Advanced Training',
        bullets: ['Complete foundational & advanced training']
      },
      {
        title: 'Integrated Curriculum',
        bullets: [
          'From basics to automation',
          'Cross-platform control systems',
          'Safety protocols & checklists',
          'Mission testing scenarios',
          'Certification prep and mock tests'
        ]
      },
      {
        title: 'Real-World Experience',
        bullets: ['Real-world missions & certification preparation']
      }
    ]
  }
];

const imageUrls = [
  IMAGES.DummyImage,
  IMAGES.DummyImage,
  IMAGES.DummyImage,
  IMAGES.DummyImage,
  IMAGES.DummyImage,
];

const sizeClasses = ['small', 'medium', 'large', 'medium', 'small'];

const WhatWeOffer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('small');
  const activeData = tabs.find(tab => tab.key === activeTab);


  const handleNavigate = (path, activeTab) => {
    console.log('activeTab: ', activeTab);
    console.log('path: ', path);
    navigate(path, { state: activeTab });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="what-we-offer">
      <h2>What We Offer</h2>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="offer-content">
        {/* Left Column */}
        <div className="left">
          <img src={activeData.img} alt={activeTab} loading="lazy"/>
          <div className="button-group">
            <button className="talk-btn">Talk with us</button>
            <button className="learn-btn" onClick={() => handleNavigate("/rpc-course-category", activeTab)}>Learn more</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="right">
          <h3>{activeData.header}</h3>
          <div className="steps">
            {activeData.steps.map((step, idx) => (
              <div className="step-item" key={idx}>
                <div className="step-visual">
                  <div className="step-number">
                    {idx + 1}
                  </div>
                </div>
                <div className="step-text">
                  <strong>{step.title}</strong>
                  <ul>
                    {step.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Case */}
      <div className="use-case-card-container">
        {useCaseData.map((item, index) => (
          <div key={index} className="use-case-card">
            <img src={item.image} alt={item.title} className="use-case-card-image" loading="lazy"/>
            <h3 className="use-case-card-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
