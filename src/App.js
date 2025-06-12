import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import JobsList from "./pages/JobsList";
import JobDetail from "./pages/JobDetail";
import CreateJob from "./pages/CreateJob";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/new" element={<CreateJob />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
