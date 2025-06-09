import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './JobsListPage.css';
import { jobData } from '../../components/constant';

const JobDescriptionPage = () => {
  const { jobId } = useParams();
  const job = jobData[jobId];

  if (!job) {
    return (
      <div className="job-description-page">
        <Link to="/jobs" className="back-link">← Back to Jobs</Link>
        <h1>Job Not Found</h1>
        <p>This job does not exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="job-description-page">
      <Link to="/jobs" className="back-link">← Back to Jobs</Link>
      <h1>{job.title}</h1>
      <p className="posted-date">Posted on: {job.postedDate}</p>
      <p>
        We are looking for a skilled {job.title.split(' ')[0]} to join our team.
        <br /><br />
        <strong>Responsibilities:</strong><br />
        {job.responsibilities.map((item, index) => (
          <React.Fragment key={index}>• {item}<br /></React.Fragment>
        ))}
        <br />
        <strong>Requirements:</strong><br />
        {job.requirements.map((item, index) => (
          <React.Fragment key={index}>• {item}<br /></React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default JobDescriptionPage;
