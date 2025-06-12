import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getJob } from "../api";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJob(id).then(setJob);
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Status: {job.status}</p>
      <Link to="/jobs">Back to Jobs</Link>
    </div>
  );
}
