// Icons
import { FaArrowRight, FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

// Images  //22imgs
import dummyImage from "../assets/images/dummy.avif";
import logoLight from "../assets/images/logo-light.png";
import coeabout from "../assets/images/coe-aboutus.jpg";
import productimg1 from "../assets/videos/infrastructure.mp4";
import productimg2 from "../assets/videos/smartcity.mp4";
import productimg3 from "../assets/videos/forest.mp4";
import productimg4 from "../assets/videos/disaster.mp4";
import productimg5 from "../assets/videos/security.mp4";
import productimg6 from "../assets/images/coehome.jpg";
import productimg7 from "../assets/images/dronedesignhome.jpg";
import usecaseIcon1 from "../assets/images/licenseicon.png";
import usecaseIcon2 from "../assets/images/govicon.png";
import usecaseIcon3 from "../assets/images/validityicon.png";
import usecaseIcon4 from "../assets/images/careericon.png";
import usecaseIcon5 from "../assets/images/registericon.png";
import usecaseIcon6 from "../assets/images/oppurtunitiesicon.png";
import coesec1img1 from "../assets/images/coeimg1.jpg";
import coesec1img2 from "../assets/images/coeimg2.jpg";
import coesec1img3 from "../assets/images/coeimg3.jpg";
import coesec1img4 from "../assets/images/coeimg4.png";
import coesec1img5 from "../assets/images/coeimg5.png";
import coesec1img7 from "../assets/images/coeimg7.png";
import droneAcquisitionDataimage1 from "../assets/videos/dronefly.mp4";
import droneAcquisitionDataimage2 from "../assets/images/analytics.jpg";
// course-content
import courseContent from "../assets/images/course-content.png"

import homeBackgroundVid from "../assets/videos/coehome.mp4"

import bgDroneImg from "../assets/images/bg-drone-img.png"

// About
import madam from "../assets/images/madam.png"

// Partner Logos
import wef from "../../src/assets/images/wef.png";
import aghub from "../../src/assets/images/aghub.png";
import agi from "../../src/assets/images/agi.png";
import aws from "../../src/assets/images/aws.png";
import cdm from "../../src/assets/images/cdm.png";
import cii from "../../src/assets/images/cii.png";
import dst from "../../src/assets/images/dst.png";
import dstnidhi from "../../src/assets/images/dstnidhi.png";
import dubaichamber from "../../src/assets/images/dubaichamber.png";
import gitex from "../../src/assets/images/gitex.png";
import govap from "../../src/assets/images/govap.png";
import isb from "../../src/assets/images/isb.png";
import jssbusiness from "../../src/assets/images/jssbusiness.png";
import kiettbi from "../../src/assets/images/kiettbi.png";
import nidhiprayas from "../../src/assets/images/nidhiprayas.png";
import northstar from "../../src/assets/images/northstar.png";
import startupindia from "../../src/assets/images/startupindia.png";
import thub from "../../src/assets/images/thub.png";
import tsic from "../../src/assets/images/tsic.png";



export const ICONS = {
  ArrowRight: FaArrowRight,
  Time: FaClock,
  Location: FaMapMarkerAlt,
  Phone: FaPhoneAlt,
};

export const IMAGES = {
  DummyImage: dummyImage,
  LogoLight: logoLight,
  COEaboutimage: coeabout,
  infrastructureimage: productimg1,
  smartcityimage: productimg2,
  forestimage: productimg3,
  disasterimage: productimg4,
  securityimage: productimg5,
  coehomeimage: productimg6,
  dronehomeimage: productimg7,
  usecaseicon1: usecaseIcon1,
  usecaseicon2: usecaseIcon2,
  usecaseicon3: usecaseIcon3,
  usecaseicon4: usecaseIcon4,
  usecaseicon5: usecaseIcon5,
  usecaseicon6: usecaseIcon6,
  COEsec1img1: coesec1img1,
  COEsec1img2: coesec1img2,
  COEsec1img3: coesec1img3,
  COEsec1img4: coesec1img4,
  COEsec1img5: coesec1img5,
  COEsec1img7: coesec1img7,
  droneAcquisitiondataimage1: droneAcquisitionDataimage1,
  droneAcquisitiondataimage2: droneAcquisitionDataimage2,
  BgDroneImg: bgDroneImg,
  CourseContent: courseContent,
  Madam: madam,

  // Partner logos
  wef,
  aghub,
  agi,
  aws,
  cdm,
  cii,
  dst,
  dstnidhi,
  dubaichamber,
  gitex,
  govap,
  isb,
  jssbusiness,
  kiettbi,
  nidhiprayas,
  northstar,
  startupindia,
  thub,
  tsic,
};

export const VIDEOS = {
  HomeBackgroundVid: homeBackgroundVid,
  Forest: productimg3
}

export const features = [
  {
    title: "Infrastructure Monitoring",
    description: "Transforming infrastructure management with smart insights — from tracking mine volumes and detecting road damage to monitoring construction progress, safety compliance, and transmission lines, all powered by precision drone analytics.",
    button: { text: "Learn More", link: "/infrastructure-monitoring", classNames: "btn-primary btn-arrow", icon: true },
    image: IMAGES.infrastructureimage,
    mediaType: 'video'
  },
  {
    title: "Smart City Living",
    description: "Akin Analytics empowers smarter cities through AI driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security event oversight.",
    button: { text: "Learn More", link: "/infrastructure-monitoring", classNames: "btn-primary btn-arrow", icon: true },
    image: IMAGES.smartcityimage,
    mediaType: 'video'
  },
  {
    title: "Forest & Environment Monitoring",
    description: "Akin Analytics supports sustainable conservation with AI-enabled drone intelligence — delivering actionable insights for forest growth monitoring, wildlife analytics, environmental risk detection, and compliance auditing in protected zones.",
    button: { text: "Learn More", link: "/infrastructure-monitoring", classNames: "btn-primary btn-arrow", icon: true },
    image: IMAGES.forestimage,
    mediaType: 'video'
  },
  {
    title: "Disaster Management & Emergency Response",
    description: "Akin Analytics enables rapid emergency response through real-time drone surveillance — providing critical insights for search and rescue, flood monitoring, structural damage evaluation, and coordinated crowd and traffic management.",
    button: { text: "Learn More", link: "/infrastructure-monitoring", classNames: "btn-primary btn-arrow", icon: true },
    image: IMAGES.disasterimage,
    mediaType: 'video'
  },
  {
    title: "Center of Excellence",
    description: " Our RPTO-certified academy provides hands-on training in drone operations, safety protocols, and real-time mission execution—accredited by DGCA.",
    button: { text: "Train With Us", link: "/infrastructure-monitoring", classNames: "btn-primary btn-arrow gradient-btn-primary", icon: true },
    tagline: "Training the next generation of drone pilots.",
    image: IMAGES.coehomeimage,
    mediaType: 'image'
  },
  {
    title: "Drone Design & Manufacturing",
    description: " From micro-drones to rugged industrial builds, we design, test, and manufacture drones tailored for mapping, surveillance, spraying, and more.",
    button: { text: "Explore Our Drones", link: "/infrastructure-monitoring", classNames: "btn-primary btn-arrow gradient-btn-primary", icon: true },
    tagline: "Precision-built drones for every industry.",
    image: IMAGES.dronehomeimage,
    mediaType: 'image'
  },
];

export const droneAcquisitionData = [
  {
    title: "Accelerate Drone Flight Innovation",
    header: "Power Visual AI with Precision Drone Inspections",
    description: "Capture. Analyze. Act — High-Precision Drone Inspections That Power Visual AI for Smarter, Faster Field Decisions",
    image: IMAGES.droneAcquisitiondataimage1,
    mediaType: 'video'
  },
  {
    title: "Scale Vision AI Platform",
    header: "Vision AI for Enterprise",
    description: "Build, test, and optimize Vision AI applications that unlock the value of your data.",
    image: IMAGES.droneAcquisitiondataimage2,
    mediaType: 'image'
  }
];

// Insights data
export const insightsData = [
  {
    title: "The Power of Drone Vision in Smart Infrastructure",
    image: dummyImage,
  },
  {
    title: "Drones are Reshaping Environmental Monitoring",
    image: dummyImage,
  },
  {
    title: "Integrating Visual Data into AI Workflows",
    image: dummyImage,
  }
];

// Testimonials data
export const testimonialsData = [
  {
    name: "John Doe",
    position: "CEO, Tech Innovations",
    description: "Akin Analytics has transformed our operations with their cutting-edge drone technology. The insights we gain are invaluable.",
    image: dummyImage,
  },
  {
    name: "Jane Smith",
    position: "CTO, Green Solutions",
    description: "The precision and efficiency of Akin's drones have revolutionized our environmental monitoring processes.",
    image: dummyImage,
  }
];

// Navbar Dropdown data
export const dropdownOptions = {
  Resources: [
    "About Us",
    "Careers",
    "Events and Gallery",
    "Blogs",
    "Contact Us",
  ],
};

// coeSessionsData
export const coeSessionsData = [
  {
    title: "Top-tier training programs",
    src: IMAGES.COEsec1img1,
    type: "image",
  },
  {
    title: "Forest Conservation Overview",
    src: VIDEOS.Forest,
    type: "video",
  },
  {
    title: "Fostering research initiatives",
    src: IMAGES.COEsec1img2,
    type: "image",
  },
  {
    title: "Aerial Scouting Footage",
    src: VIDEOS.HomeBackgroundVid,
    type: "video",
  },
  {
    title: "Promoting industry partnerships",
    src: IMAGES.COEsec1img3,
    type: "image",
  },
  {
    title: "Onfield Flight Experience",
    src: IMAGES.COEsec1img4,
    type: "image",
  },
  {
    title: "Experienced Leadership",
    src: IMAGES.COEsec1img5,
    type: "image",
  },
  {
    title: "Realtime Experience in onfield",
    src: IMAGES.COEsec1img7,
    type: "image",
  }
];
export const aboutVidTestimonialsData = [
  {
    title: "Top-tier training programs",
    src: IMAGES.infrastructureimage,
    type: "video",
  },
  {
    title: "Forest Conservation Overview",
    src: VIDEOS.Forest,
    type: "video",
  },
  {
    title: "Fostering research initiatives",
    src: IMAGES.smartcityimage,
    type: "video",
  },
  {
    title: "Aerial Scouting Footage",
    src: VIDEOS.HomeBackgroundVid,
    type: "video",
  },
  {
    title: "Promoting industry partnerships",
    src: IMAGES.disasterimage,
    type: "video",
  },
];


// COE Testimonials
export const coeTestimonials = [
  { title: "The Power of Drone Vision in Smart Infrastructure", description: "Discover how drones with advanced vision are revolutionizing infrastructure monitoring — from road conditions to construction progress...." },
  { title: "Drones are Reshaping Environmental Monitoring", description: "Learn how aerial intelligence helps detect deforestation, monitor green cover, and enforce eco-zone regulations effectively." },
  { title: "Integrating Visual Data into AI Workflows", description: "A guide to how high-resolution drone data powers visual AI models — enhancing defect detection, audits, and maintenance forecasts." },
  { title: "User-Friendly", description: "The interface was super intuitive." },
  { title: "Great Value", description: "Fantastic features for the price." },
];

// Use Case Data
export const useCaseData = [
  {
    title: "DGCA RPC Certified License",
    image: IMAGES.usecaseicon1,
  },
  {
    title: "Opportunity with Government Agencies",
    image: IMAGES.usecaseicon2,
  },
  {
    title: "10 Years Validity",
    image: IMAGES.usecaseicon3,
  },
  {
    title: "Long Term Career path",
    image: IMAGES.usecaseicon4,
  },
  {
    title: "Register to Fly DGCA Approved Drones",
    image: IMAGES.usecaseicon5,
  },
  {
    title: "Access to more Job Opportunities",
    image: IMAGES.usecaseicon6,
  },
];

// Partnership Logos
export const partnerLogos = [
  wef,
  aghub,
  agi,
  aws,
  cdm,
  cii,
  dst,
  dstnidhi,
  dubaichamber,
  gitex,
  govap,
  isb,
  jssbusiness,
  kiettbi,
  nidhiprayas,
  northstar,
  startupindia,
  thub,
  tsic,
];

// Cascading Images
// export const imageUrls = [
// //   '/images/img1.jpg',
// //   '/images/img2.jpg',
// //   '/images/img3.jpg',
// //   '/images/img4.jpg',
// //   '/images/img5.jpg',
// //   '/images/img6.jpg',
// //   '/images/img7.jpg',

//     coeabout,
//     productimg6,
//     droneAcquisitionDataimage2,
//     coeabout,
//     productimg7,
//     productimg6,
//     coeabout,
//     productimg7
// ];

export const cardData = [
  {
    imageUrl: coeabout,
    description: 'Center of Excellence Overview',
  },
  {
    imageUrl: productimg6,
    description: 'Product 6: Data Analysis Tool',
  },
  {
    imageUrl: droneAcquisitionDataimage2,
    description: 'Drone Data Acquisition',
  },
  {
    imageUrl: coeabout,
    description: 'Center of Excellence Strategy',
  },
  {
    imageUrl: productimg7,
    description: 'Product 7: Machine Learning Model',
  },
  {
    imageUrl: productimg6,
    description: 'Product 6: AI Dashboard',
  },
  {
    imageUrl: coeabout,
    description: 'CoE Use Cases & Impact',
  },
  {
    imageUrl: productimg7,
    description: 'Product 7: Deployment Suite',
  },
];


// ✅ Replace this with real dynamic data
export const exploreCoursesData = [
  {
    title: 'Course 1',
    description: 'Introduction to Web Development',
    imageUrl: coeabout,
  },
  {
    title: 'Course 2',
    description: 'Advanced JavaScript Techniques',
    imageUrl: productimg6,
  },
  {
    title: 'Course 3',
    description: 'UI/UX Design Fundamentals',
    imageUrl: productimg7,
  },
  {
    title: 'Course 4',
    description: 'React for Beginners',
    imageUrl: droneAcquisitionDataimage2,
  },
  {
    title: 'Course 5',
    description: 'Full Stack Project Build',
    imageUrl: productimg6,
  },
  {
    title: 'Course 6',
    description: 'Backend with Node.js',
    imageUrl: coeabout,
  },
];

// CEO > RPC > Why Choose us data
export const rpcWCUsData = [
  {
    icon: '📍',
    title: 'DGCA Approved Organization',
    description: "We offer Training at India's First DGCA Approved Drone Training Organization Under UAS Rules — 2021."
  },
  {
    icon: '🗂️',
    title: 'Small & Medium Category',
    description: 'Only RPTO Offering both Small & Medium Category Certified Training Program in India.'
  },
  {
    icon: '💻',
    title: 'Best Flight Simulators',
    description: 'Best in Class in Flight Simulators, High Quality. Built in NPNT and Make In India Drones.'
  },
  {
    icon: '⭐',
    title: 'DGCA Approved Instructors',
    description: 'Highly Qualified & DGCA Approved Instructors offering 1 to 1 Flying Lessons for Individual Attention.'
  },
  {
    icon: '✅',
    title: 'Accommodation',
    description: 'Affordable Guest House with Catering Facilities Next to the Training Location, MIT Campus.'
  },
  {
    icon: '📘',
    title: 'DGCA Certified License',
    description: 'DGCA Approved Remote Pilot License with Validity of Maximum 10 years, as per UAS Rules — 2021.'
  },
]


// Rpc Course Category
// Small Remote Pilote Training
export const smallRemotePilot = {
  headerSection: {
    header: 'Small Remote Pilot Course',
    description: 'Get certified to fly small category drones (up to 2kg) with DGCA-approved training. This 5-day program covers theory, ground handling, simulations, and real-time flying—equipping you with the skills and confidence to operate drones safely and professionally.'
  },
  courseOverview: {
    header: 'Course Overview',
    leftIcons: [
      { icon: FaClock, desc: 'Duration' },
      { icon: FaMapMarkerAlt, desc: '28 Topics' },
      { icon: FaPhoneAlt, desc: 'Drone Weight Category' },
    ],
    rightIcons: [
      { icon: FaClock, desc: 'Drone equipment maintaining' },
      { icon: FaMapMarkerAlt, desc: 'Real-Time Flying' },
      { icon: FaMapMarkerAlt, desc: 'Real' },
    ],
    rightIconDesc: 'Based on the whether flying timings and day will be effect',
  },
  courseOverviewImg: 'IMAGE',
  courseDetailsWithUseCase: {}
}

// Medium Remote Pilote Training
export const mediumRemotePilot = {
  headerSection: {
    header: 'Medium Remote Pilot Course',
    description: 'Get certified to fly small category drones (up to 2kg) with DGCA-approved training. This 5-day program covers theory, ground handling, simulations, and real-time flying—equipping you with the skills and confidence to operate drones safely and professionally.'
  },
  courseOverview: {
    header: 'Course Overview',
    leftIcons: [
      { icon: 'Time', desc: 'Duration' },
      { icon: 'Location', desc: '28 Topics' },
      { icon: 'Phone', desc: 'Drone Weight Category' }
    ],
    rightIcons: [
      { icon: 'Time', desc: 'Drone equipment maintaining' },
      { icon: 'Location', desc: 'Real-Time Flying' },
      { icon: 'Time', desc: 'Real' },
    ],
    rightIconDesc: 'Based on the whether flying timings and day will be effect',
  },
  courseOverviewImg: 'IMAGE',
  courseDetailsWithUseCase: {}
}

// Small & Medium Remote Pilote Training
export const smlMedRemotePilot = {
  headerSection: {
    header: 'Small and Medium Remote Pilot Course',
    description: 'Get certified to fly small category drones (up to 2kg) with DGCA-approved training. This 5-day program covers theory, ground handling, simulations, and real-time flying—equipping you with the skills and confidence to operate drones safely and professionally.'
  },
  courseOverview: {
    header: 'Course Overview',
    leftIcons: [
      { icon: 'Time', desc: 'Duration' },
      { icon: 'Location', desc: '28 Topics' },
      { icon: 'Phone', desc: 'Drone Weight Category' }
    ],
    rightIcons: [
      { icon: 'Time', desc: 'Drone equipment maintaining' },
      { icon: 'Location', desc: 'Real-Time Flying' },
      { icon: 'Time', desc: 'Real' },
    ],
    rightIconDesc: 'Based on the whether flying timings and day will be effect',
  },
  courseOverviewImg: 'IMAGE',
  courseDetailsWithUseCase: {}
}

// Milestones
export const milestoneData = [
  { year: '2021', description: 'Launched our MVP and secured seed funding.' },
  { year: '2022', description: 'Scaled the team and introduced new features.' },
  { year: '2023', description: 'Expanded to international markets.' },
  { year: '2024', description: 'Crossed 1M users and released mobile app.' },
  { year: '2025', description: 'Launched AI-powered insights module.' },
];

// All Blogs Pagination
export const allBlogsData = [
  {
    title: 'Remote Pilot Training Organization',
    description:
      'Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, sanitation management, green space monitoring, encroachment detection, traffic flow optimization, and high-security eAkin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, Akin Analytics empowers smarter cities through AI-driven drone operations — enabling precision in mosquito control, vent oversight.',
    image: IMAGES.BgDroneImg,
  },
  {
    title: 'Drone in Construction',
    description:
      'Construction sites benefit from drone-based monitoring, offering real-time updates, 3D mapping, aenefit from drone-based monitoring, offering real-time updaenefit from drone-based monitoring, offering real-time updand material stockpile analysis.',
    image: IMAGES.COEaboutimage,
  },
  {
    title: 'Smart Farming with Drones',
    description:
      'AI-powered drones are revolutionizing precision agriculture with crop monitoring, irrigation efficiency, and pest detection.',
    image: IMAGES.DummyImage,
  },
  {
    title: 'Smart Farming with Drones',
    description:
      'AI-powered drones are revolutionizing precision agriculture with crop monitoring, irrigation efficiency, and pest detection.',
    image: IMAGES.Madam,
  },
  {
    title: 'Smart Farming with Drones',
    description:
      'AI-powered drones are revolutionizing precision agriculture with crop monitoring, irrigation efficiency, and pest detection.',
    image: IMAGES.BgDroneImg,
  },
  {
    title: 'Smart Farming with Drones',
    description:
      'AI-powered drones are revolutionizing precision agriculture with crop monitoring, irrigation efficiency, and pest detection.',
    image: IMAGES.COEaboutimage,
  },
  {
    title: 'Smart Farming with Drones',
    description:
      'AI-powered drones are revolutionizing precision agriculture with crop monitoring, irrigation efficiency, and pest detection.',
    image: IMAGES.coehomeimage,
  },
  {
    title: 'Smart Farming with Drones',
    description:
      'AI-powered drones are revolutionizing precision agriculture with crop monitoring, irrigation efficiency, and pest detection.',
    image: IMAGES.COEaboutimage,
  },
];

// Jobs Data
export const jobData = {
  fullstack: {
    title: 'Full Stack Developer with 3+ Years of Experience',
    postedDate: 'June 1, 2025',
    responsibilities: [
      'Build and maintain full-stack web applications',
      'Work on both frontend (React) and backend (Node.js, Express)',
      'Integrate APIs and handle database interactions (MongoDB/MySQL)',
      'Collaborate with UX/UI teams for consistent interfaces',
      'Write clean, scalable, and maintainable code',
    ],
    requirements: [
      '3+ years experience with JavaScript, React, Node.js',
      'Familiarity with RESTful APIs, Git, CI/CD',
      'Understanding of data structures and algorithms',
    ],
  },
  frontend: {
    title: 'Frontend Developer – React.js & UI/UX',
    postedDate: 'May 28, 2025',
    responsibilities: [
      'Develop responsive UI using React.js',
      'Implement designs from Figma or Adobe XD',
      'Optimize performance for mobile and web',
      'Work closely with backend and design teams',
    ],
    requirements: [
      '2+ years experience with React.js, HTML/CSS',
      'Strong grasp of JavaScript ES6+, component lifecycles',
      'Experience with design systems and accessibility standards',
    ],
  },
  backend: {
    title: 'Backend Developer – Node.js & Database Management',
    postedDate: 'May 22, 2025',
    responsibilities: [
      'Design and develop backend APIs with Node.js',
      'Manage and optimize databases (MongoDB/MySQL)',
      'Implement secure authentication and data protection',
      'Deploy using Docker and CI/CD pipelines',
    ],
    requirements: [
      '3+ years experience with Node.js, Express, databases',
      'Knowledge of authentication, performance tuning',
      'Experience with cloud (AWS, Azure, GCP) is a plus',
    ],
  },
};