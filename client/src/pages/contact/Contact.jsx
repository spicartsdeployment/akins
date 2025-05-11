// src/pages/Contact/Contact.jsx
import React from "react";
import Seo from "../../components/seo/SEO";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact Us | MyApp"
        description="Get in touch with us for inquiries or support."
        keywords="contact, myapp"
      />
      <section>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us.</p>
        {/* Other content */}
      </section>
    </>
  );
};

export default Contact;
