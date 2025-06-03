import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { cardData, IMAGES, mediumRemotePilot, rpcWCUsData, smallRemotePilot, smlMedRemotePilot } from '../../constant';
import "./RpcCourseCategory.css"
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollObserver from '../../common-components/intersectObserver/IntersectObserver';
import CascadingImageSlider from '../../common-components/cascadingImgContainer/CascadingImgContainer';

const RpcCourseCategory = () => {
    const location = useLocation();
    const data = location.state;
    const [rpcData, setRpcData] = useState({})
    console.log('rpcData:........................ ', rpcData);

    useEffect(() => {
        if (!data) return;

        if (data === "small") {
            setRpcData(smallRemotePilot);
        } else if (data === "medium") {
            setRpcData(mediumRemotePilot);
        } else if (data === "combined") {
            setRpcData(smlMedRemotePilot);
        }
    }, [data]);
    console.log('data:.............. ', data);
    return (
        <>
            <section className="rpc-course-cat-container">
                <div className="rpc-container">
                    <div className="rpc-text">
                        <div>
                            <h2>{rpcData.headerSection?.header}</h2>
                            <p>{rpcData.headerSection?.description}</p>
                        </div>
                        <div className="rpc-btns-container">
                            <button to="/book-course" className="btn-primary gradient-btn-primary home-bk-demo">Book Course</button>
                            <button to="/enquiry-now" className="btn-primary">Enquiry Now</button>
                        </div>
                    </div>
                    <div className="rpc-img">
                        <img src={IMAGES.COEaboutimage} alt="About Center of Excellence" loading="lazy"/>
                    </div>
                </div>
            </section>

            <ScrollObserver>
                <section className="rpc-crs-overview-con">
                    <div className="rpc-crs-overview-content">
                        <div className="rpc-left-column">
                            <h2>{rpcData?.courseOverview?.header}</h2>
                            <div className="rpc-icon-cards">
                                {rpcData?.courseOverview?.leftIcons?.map((item, index) => (
                                    <div className="rpc-icon-card" key={index}>
                                        <div className="icon">{item.icon}</div>
                                        <p>{item?.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="call-text btn-primary gradient-btn-primary">
                                Call us on: <a href="tel:+912345654323">+91 - 7337292216</a>
                            </p>
                        </div>
                        <div className="rpc-right-column">
                            <div className="top-icons">
                                {rpcData.courseOverview?.rightIcons?.map((item, index) => (
                                    <div className="rpc-icon-card rpc-right-cards" key={index}>
                                        <div className="icon">{item.icon}</div>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                                <p className="crse-overview-desc">{rpcData.courseOverview?.rightIconDesc}</p>
                            </div>

                        </div>
                    </div>
                </section>
            </ScrollObserver>


            {/* container with image as whole */}
            <ScrollObserver>
                <div className="course-content-conntainer">
                    <img src={IMAGES.CourseContent} alt='wewdc afsdvd' loading="lazy"/>
                </div>
            </ScrollObserver>

            {/* Cascading images */}
            <ScrollObserver>
                <CascadingImageSlider cardData={cardData} />
            </ScrollObserver>

            {/* Why choose us */}
            <ScrollObserver>
                <section className="rpc-why-choose-us">
                    <h2>Why Choose Us</h2>
                    <h3>India’s First Remote Pilot Training Organisation Under UAS Rules — 2021.</h3>
                    <div className="rpc-features">
                        {rpcWCUsData.map((item, index) => (
                            <div key={index} className="rpc-feature">
                                <div className="rpc-icon">{item.icon}</div>
                                <div className="rpc-feature-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollObserver>

            {/* Need a hand - Contact form */}
            <ScrollObserver>
                <div className="rpc-wcu-container">
                    <div className="rpc-form-section">
                        <h2>Need a hand?</h2>
                        <p>Send Request for Call Back</p>
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <div className="rpc-phone-input">
                                <span className="rpc-flag">🇮🇳</span>
                                <input type="tel" placeholder="Your Phone" />
                            </div>
                            <select>
                                <option>Small Category</option>
                            </select>
                            <textarea placeholder="Your Message"></textarea>
                            <div className="rpc-captcha-box">
                                <input type="checkbox" />
                                <span>I'm not a robot</span>
                                <img src="https://dummyimage.com/60x30/ccc/000&text=CAPTCHA" alt="Captcha" loading="lazy"/>
                            </div>
                            <button type="submit">Send Request</button>
                        </form>
                    </div>

                    <div className="rpc-download-section">
                        <div className="rpc-download-box">
                            <h3>Download the Course Details</h3>
                            <button className="rpc-download-button">Download Brochure</button>
                        </div>
                        <img
                            className="rpc-certificate-img"
                            src="https://dummyimage.com/300x400/ccc/000&text=CERTIFICATE"
                            alt="Certificate"
                            loading="lazy"
                        />
                    </div>
                </div>
            </ScrollObserver>
        </>
    )
}

export default RpcCourseCategory
