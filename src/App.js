import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import JobsList from "./pages/JobsList";
import JobDetail from "./pages/JobDetail";
import CreateJob from "./pages/CreateJob";
import Expenses from "./pages/Expenses";
import GeneralExpenses from "./pages/GeneralExpenses";
import ClientApproval from "./pages/ClientApproval";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/new" element={<CreateJob />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/general-expenses" element={<GeneralExpenses />} />
        <Route path="/client-approval/:jobId" element={<ClientApproval />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
