import React from 'react';
import './PrivacyPolicy.css';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="privacy-container">
            <p className="back-link" onClick={() => handleNavigate('/')}>← Back to Home</p>
            <h1 className="section-title">Akin Privacy Policy</h1>
            <p className="effective-date">Effective Date: [Insert Date]</p>

            <section>
                <h2>1. Introduction</h2>
                <p>This Privacy Policy outlines how Akin Analytics ("Akin", "we", "us", or "our") collects, uses, and protects the information you provide...</p>
            </section>

            <section>
                <h2>2. Information We Collect</h2>
                <ul>
                    <li><strong>Personal Information:</strong> Name, email, phone number, job title, address (if submitted).</li>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system...</li>
                    <li><strong>Service Interaction Data:</strong> Info about your activity on our platforms...</li>
                    <li><strong>Training Data:</strong> Enrollment details, certifications, etc.</li>
                    <li><strong>Billing Data:</strong> Payment method, transaction details...</li>
                </ul>
            </section>

            <section>
                <h2>3. How We Use the Information</h2>
                <ul>
                    <li>To provide access to our services.</li>
                    <li>To ensure compliance with DGCA and safety standards.</li>
                    <li>To support R&D of drone and AI capabilities.</li>
                </ul>
            </section>

            <section>
                <h2>4. Sharing of Information</h2>
                <ul>
                    <li>With trusted third parties under confidentiality agreements.</li>
                    <li>With legal or governmental authorities when required.</li>
                    <li>Never for third-party advertising or marketing resale.</li>
                </ul>
            </section>

            <section>
                <h2>5. Data Retention and Protection</h2>
                <p>We retain your information as long as necessary for legal and operational purposes...</p>
            </section>

            <section>
                <h2>6. Use of Cookies and Tracking</h2>
                <p>We use cookies and tracking technologies to analyze user activity...</p>
            </section>

            <section>
                <h2>7. Your Rights</h2>
                <ul>
                    <li>Request access or deletion of your data.</li>
                    <li>Withdraw consent at any time.</li>
                </ul>
            </section>

            <section>
                <h2>8. International Data Transfers</h2>
                <p>Your data may be processed in other countries with safeguards in place.</p>
            </section>

            <section>
                <h2>9. Third-Party Links</h2>
                <p>We are not responsible for the content or data policies of external sites.</p>
            </section>

            <section>
                <h2>10. Policy Updates</h2>
                <p>We may revise this policy periodically with a new effective date posted here.</p>
            </section>

            <section>
                <h2>11. Contact Us</h2>
                <p>
                    Email: <a href="mailto:legal@akinanalytics.ai">legal@akinanalytics.ai</a><br />
                    Phone: +91-XXXXXXXXXX
                </p>
            </section>

            <img src="/images/placeholder.png" alt="Placeholder" className="privacy-image" />
        </div>
    );
};

export default PrivacyPolicy;
