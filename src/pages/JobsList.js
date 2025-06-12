import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../api";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  return (
    <div>
      <h2>Jobs List</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link> - {job.status}
          </li>
        ))}
      </ul>
      <Link to="/jobs/new">+ Create New Job</Link>
    </div>
  );
}
