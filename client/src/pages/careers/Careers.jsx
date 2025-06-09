import React from 'react';
import './Careers.css';
import { IMAGES } from '../../components/constant';
import { useNavigate } from 'react-router-dom';


const CareersPage = () => {
    const navigate = useNavigate(); // ← add this

    const handleExploreJobs = () => {
        navigate('/jobs'); // ← redirect to the jobs page
    };
    const values = [
        {
            icon: '🌍',
            title: 'Dream big',
            description:
                'We make the impossible possible by dreaming big to solve our customers’ problems and improve their businesses.',
        },
        {
            icon: '🤝',
            title: 'Win together',
            description:
                'It’s all about the team; being inclusive, respectful, and sharing our knowledge to empower all for personal growth.',
        },
        {
            icon: '💡',
            title: 'Keep it simple',
            description:
                'Things stay simple when you are honest, open, and act with integrity. Eyes on the horizon, feet on the ground.',
        },
        {
            icon: '✅',
            title: 'Make it happen',
            description:
                'We are “doers” who value getting results and don’t overthink matters. Let’s get it done now.',
        },
    ];

    return (
        <div className="careers-page">
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Make it happen with us!</h1>
                    <p>
                        We make great things happen, and we make them matter – for our customers and the world.
                    </p>
                    <button className="primary-btn" onClick={handleExploreJobs}>Explore all jobs</button>
                </div>
                <div className="hero-images-grid">
                    <img src={IMAGES.DummyImage} alt="Team work" className="hero-img img1" />
                    <img src={IMAGES.DummyImage} alt="Innovation" className="hero-img img2" />
                    <img src={IMAGES.DummyImage} alt="Growth" className="hero-img img3" />
                    <img src={IMAGES.DummyImage} alt="Collaboration" className="hero-img img4" />
                    <img src={IMAGES.DummyImage} alt="Achievement" className="hero-img img5" />
                </div>
            </section>

            <section className="values-section">
                <h2>One company with shared values</h2>
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div key={index} className="value-card">
                            <div className="value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="journey-section">
                <h2>The Sinch Journey</h2>
                <p>
                    Back in 2008, our founders set out to transform customer engagement by making it easier to
                    communicate at scale. Today, we help thousands of businesses across the globe do just that.
                </p>
            </section>
        </div>
    );
};

export default CareersPage;
