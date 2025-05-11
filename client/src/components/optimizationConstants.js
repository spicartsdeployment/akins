// constants/seo.js
// constants.js

export const siteMetadata = {
    title: "Your Site Title",
    description: "SPicArts AI offers advanced AI solutions, custom software, web development, and mobile app development services.",
    robots: "index, follow",
    ogTitle: "Your Site Title",
    ogDescription: "SPicArts AI offers advanced AI solutions, custom software, web development, and mobile app development services.",
    ogImage: "link-to-image.jpg",
    ogType: "website",
    ogUrl: "https://www.yoursite.com",
    canonicalUrl: "https://www.yoursite.com",
    url: "https://www.spicarts.ai",
    keywords: ["AI solutions", "custom software", "web development", "mobile app development", "digital transformation"],
    image: "/path/to/your/default-image.jpg",
};

export const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteMetadata.title,
    "url": siteMetadata.url,
    "description": siteMetadata.description,
    "publisher": {
        "@type": "Organization",
        "name": siteMetadata.title,
        "url": siteMetadata.url
    }
};

// Structured Data for Home Page
export const homepageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SPicArts AI Home Page",
    "description": siteMetadata.description,
    "mainEntityOfPage": siteMetadata.url,
    "publisher": {
        "@type": "Organization",
        "name": siteMetadata.title,
        "url": siteMetadata.url
    }
};

// Structured Data for Development Page
export const developmentStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Development Services",
    "description": "SPicArts AI offers high-performance websites, mobile apps, and custom software tailored to your business needs.",
    "mainEntityOfPage": `${siteMetadata.url}/development`,
    "publisher": {
        "@type": "Organization",
        "name": siteMetadata.title,
        "url": siteMetadata.url
    }
};

// Navbar Links (can be used for routing)
export const navbarLinks = [
    { label: "Home", to: "/" },
    { label: "Development", to: "/development" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
];

// Footer Links (for legal and informational sections)
export const footerLinks = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms of Service", to: "/terms-of-service" },
];
