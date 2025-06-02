import { VIDEOS } from '../constant';
import './EnquiryNow.css';

const EnquiryNow = () => {
  return (
    <section className="enquiry-now">
      <div className="enquiry-col form-col">
        <h2>Enquiry Now</h2>
        <form className="enquiry-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder='Enter Name' />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder='Enter Email' />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder='Type your message...'/>
          </div>
          <button type="submit" className="enquiry-btn">Submit</button>
        </form>
      </div>
      <div className="enquiry-col video-col">
        <div className="video-wrapper">
          <video src={VIDEOS.HomeBackgroundVid} autoPlay loop muted playsInline />
        </div>
        <p className="caption">Join hundreds of pilots who upskilled with Akin’s professional drone training and real-world missions.</p>
      </div>
    </section>
  );
};

export default EnquiryNow;
