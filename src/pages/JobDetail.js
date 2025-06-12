import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api";
import TimeTracker from "../components/TimeTracker";
import AttachmentsUploader from "../components/AttachmentsUploader";
import ExpenseForm from "../components/ExpenseForm";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/jobs/${id}`).then(res => setJob(res.data));
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Status: {job.status}</p>
      <p>Description: {job.description}</p>
      <p>Client: {job.client_name}</p>
      <TimeTracker jobId={job.id} />
      <AttachmentsUploader jobId={job.id} />
      <ExpenseForm jobId={job.id} />
      {/* More job info here */}
    </div>
  );
}
