import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JobsListPage.css';

const jobList = [
  {
    id: 'fullstack',
    title: 'Full Stack Developer with 3+ Years of Experience',
    postedDate: 'June 1, 2025',
    description: 'Responsibilities: Frontend + Backend Development, React, Node.js, scalable app building.',
    image: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
  },
  {
    id: 'frontend',
    title: 'Frontend Developer – React.js & UI/UX',
    postedDate: 'May 28, 2025',
    description: 'Build responsive interfaces, collaborate with designers, and optimize performance.',
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721290.png',
  },
  {
    id: 'backend',
    title: 'Backend Developer – Node.js & Database Management',
    postedDate: 'May 22, 2025',
    description: 'Design robust APIs, manage DBs, ensure performance and security at scale.',
    image: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
  },
];

const JobsListPage = () => {
  const [query, setQuery] = useState('');

  // Filter jobList based on search query
  const filteredJobs = jobList.filter((job) =>
    job.title.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <section className="jobs-page">
      <div className="browse-header">
        <h1>Browse Jobs</h1>
        <p>Find jobs, employment & career opportunities.</p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => {}}>Search</button>
      </div>

      <div className="featured-jobs">
        <h2>Featured Jobs</h2>

        <div className="job-cards-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div className="job-card" key={job.id}>
                <img
                  src={job.image}
                  alt={`${job.title} icon`}
                  className="job-icon"
                />
                <div className="job-content">
                  <h3>{job.title}</h3>
                  <p className="posted-date">Posted on: {job.postedDate}</p>
                  <p className="job-details">{job.description}</p>
                  <Link to={`/jobs/${job.id}`} className="read-more">Read More</Link>
                </div>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No matching jobs found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobsListPage;
