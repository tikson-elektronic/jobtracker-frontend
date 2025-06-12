import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get("/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <div>
      <h2>Jobs</h2>
      <Link to="/jobs/new">Create New Job</Link>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link> - {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
