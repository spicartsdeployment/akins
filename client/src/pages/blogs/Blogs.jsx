import React from 'react';
import './Blogs.css';
import { aboutVidTestimonialsData, allBlogsData, IMAGES, VIDEOS } from '../../components/constant';
import ArticleCarousel from '../../components/common-components/cardsSlider/CardsSlider';
import CardsSlider from '../../components/common-components/cardsSlider/CardsSlider';
import ReusableMediaSlider from '../../components/common-components/reusableMediaSlicer/ReusableMediaSlicer';
import ScrollObserver from '../../components/common-components/intersectObserver/IntersectObserver';
import PaginatedCardSection from '../../components/common-components/pagination/PaginatedCardSection';

const articles = [
    {
        title: "Remote Pilot Training Organization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.BgDroneImg, // replace with actual image URLs
    },
    {
        title: "Reeabrfs sad nization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.Madam, // replace with actual image URLs
    },
    {
        title: "Remsdvdvsdvc ganization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.COEsec1img1,
    },
    {
        title: "rtng ganization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.COEaboutimage,
    },
    {
        title: "wrg ganization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.COEsec1img2,
    },
    {
        title: "rmf ganization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.COEsec1img4,
    },
    {
        title: "Remote Pilot Training Organization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.BgDroneImg, // replace with actual image URLs
    },
    {
        title: "Reeabrfs sad nization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.Madam, // replace with actual image URLs
    },
    {
        title: "Remsdvdvsdvc ganization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.COEsec1img1,
    },
    {
        title: "Remsdvdvsdvc ganization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.COEsec1img1,
    },
    {
        title: "rtng ganization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.COEaboutimage,
    },
    {
        title: "Remote Pilot Training Organization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.BgDroneImg, // replace with actual image URLs
    },
    {
        title: "Reeabrfs sad nization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.Madam, // replace with actual image URLs
    },
    {
        title: "Remsdvdvsdvc ganization",
        description:
            "Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
        image: IMAGES.COEsec1img1,
    },
];

const Blogs = () => {
    return (
        <>
            <section className="blog-hero">
                <div className="blog-bnr-inner">
                    <img src={IMAGES.Madam} alt="Drone" className="blog-bnr-bg-image" loading="lazy"/>
                    <div className="blog-bnr-overlay" />
                    <div className="blog-bnr-content">
                        <h1>Latest from Akin’s</h1>
                        <p>
                            Stay updated with the latest insights, tips, and industry news on our blog.
                            Discover expert advice, success stories, and innovative uses of drone technology.
                            Our blog features a diverse range of topics to keep you informed and inspired.
                        </p>
                    </div>
                </div>
            </section>

            {/* Latest Articles */}
            <ScrollObserver>
                <CardsSlider title="Latest Articles" articlesData={articles} />
            </ScrollObserver>

            {/* Insights from Akin’s */}
            <ScrollObserver>
                <section className="blogs-drone-section">
                    <div className="blogs-expr-content">
                        <div className="blogs-drone-text">
                            <h2 className="blogs-drone-heading">
                                Insights from Akin’s
                            </h2>
                            <p>
                                At Akin, we take pride in being a trusted drone technology partner. Our drones are designed, engineered, and assembled in India, with in-house software development and a carefully managed supply chain. This allows us to deliver secure, reliable, and high-performance aerial systems tailored for mission-critical operations.
                            </p>
                            <p>
                                Each drone we produce reflects our commitment to innovation, quality, and long-term trust with government and enterprise clients.
                            </p>
                            <button className="btn-primary explr-serv-btn">Read Full Article</button>
                        </div>
                        <img src={IMAGES.Madam} alt="Drone Assembly" className="blogs-drone-image" />
                    </div>
                </section>
            </ScrollObserver>

            {/* All Blogs */}
            <ScrollObserver>
                <PaginatedCardSection title="All Blogs" data={allBlogsData} />
            </ScrollObserver>

            {/* Video Testimonials */}
            <ScrollObserver>
                <ReusableMediaSlider sectionTitle="Video Testimonials" mediaData={aboutVidTestimonialsData} visibleCount={3} />
            </ScrollObserver>


            {/* Blogs - Join us */}
            <ScrollObserver>
                <section className="blogs-cta-video-section">
                    <video
                        className="blogs-background-video"
                        src={VIDEOS.Forest}
                        autoPlay loop muted playsInline
                    />

                    <div className="blogs-cta-overlay">
                        <h2 className="blogs-cta-heading">Join Us on Our Journey to Innovation!</h2>
                        <a href="#contact" className="blogs-cta-button">Contact us Today</a>
                    </div>
                </section>
            </ScrollObserver>
        </>
    );
};

export default Blogs;
