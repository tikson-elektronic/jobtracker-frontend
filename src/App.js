import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

// Mock data for jobs
const initialJobs = [
  { id: 1, title: "Panel Upgrade", status: "pending" },
  { id: 2, title: "Install Generator", status: "approved" },
];

// Home Page (Dashboard)
function Home() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your Job Tracker! Use the links above to manage your jobs.</p>
    </div>
  );
}

// Jobs List Page
function JobsList({ jobs }) {
  return (
    <div>
      <h2>Jobs List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link> - {job.status}
          </li>
        ))}
      </ul>
      <Link to="/jobs/new">+ Create New Job</Link>
    </div>
  );
}

// Job Detail Page
function JobDetail({ jobs }) {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));
  if (!job) return <div>Job not found.</div>;
  return (
    <div>
      <h2>{job.title}</h2>
      <p>Status: {job.status}</p>
      <Link to="/jobs">Back to Jobs</Link>
    </div>
  );
}

// Create Job Page
function CreateJob({ addJob }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pending");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addJob({ title, status });
    navigate("/jobs");
  }

  return (
    <div>
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Status: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
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

// Main App Component
function App() {
  const [jobs, setJobs] = useState(initialJobs);

  function addJob(job) {
    setJobs((jobs) => [
      ...jobs,
      { ...job, id: jobs.length ? Math.max(...jobs.map((j) => j.id)) + 1 : 1 },
    ]);
  }

  return (
    <Router>
      <nav style={{ padding: 16, background: "#222", color: "#fff" }}>
        <Link to="/" style={{ color: "#fff", marginRight: 16 }}>Dashboard</Link>
        <Link to="/jobs" style={{ color: "#fff" }}>Jobs</Link>
      </nav>
      <div style={{ padding: 24 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsList jobs={jobs} />} />
          <Route path="/jobs/new" element={<CreateJob addJob={addJob} />} />
          <Route path="/jobs/:id" element={<JobDetail jobs={jobs} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
