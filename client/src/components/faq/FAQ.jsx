import { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
{
    question: 'What services does Akin Analytics offer?',
    answer: 'Akin Analytics specializes in advanced aerial intelligence solutions. Our core services include AI-powered drone analytics for industry insights, RPTO-certified pilot training to ensure compliance with aviation regulations, and custom drone manufacturing tailored to meet unique use-case requirements across sectors like agriculture, defence, and enterprise logistics.'
  },
  {
    question: 'Is the drone training program government certified?',
    answer: 'Yes, our drone training programs are DGCA-approved and conducted under our RPTO (Remote Pilot Training Organisation) certification. This means every trainee receives government-recognized certification, making them eligible for professional drone operations in India, including public and private sector deployments.'
  },
  {
    question: 'How can I book a demo or talk to your team?',
    answer: 'Booking a demo or getting in touch with our team is easy. You can click on the "Talk With Us" button on our homepage or visit our Contact page to fill out a quick enquiry form. Our team typically responds within 24 hours to schedule a session or address your queries.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including Government (urban planning, infrastructure), Agriculture (crop monitoring, yield analysis), Defence (surveillance, terrain mapping), and Enterprise sectors (inventory tracking, construction). Our solutions are adaptable and customizable based on the client’s operational goals.'
  },
  {
    question: 'What is included in the drone training course?',
    answer: 'Our training includes both theoretical and practical modules covering drone regulations, airspace knowledge, meteorology, drone hardware, maintenance, and hands-on flight training. Students also get exposure to real-world scenarios through simulated missions and industry-specific tasks.'
  }

];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-description">
        Find answers to common questions about our services and policies in our FAQ section.
        For further help, contact our support.
      </p>
      <div className="faq-items">
        {faqData.map((faq, index) => (
          <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggle(index)}>
              <h4>{faq.question}</h4>
              <span className="icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
