import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createJob } from "../api";

export default function CreateJob() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pending");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    createJob({ title, status }).then(() => {
      navigate("/jobs");
    });
  }

  return (
    <div>
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:{" "}</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Status:{" "}</label>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
