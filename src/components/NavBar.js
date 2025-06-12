import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: 16, background: "#333" }}>
      <Link to="/" style={{ color: "#fff", marginRight: 24, fontWeight: 700 }}>Dashboard</Link>
      <Link to="/jobs" style={{ color: "#fff", marginRight: 24 }}>Jobs</Link>
      <Link to="/jobs/new" style={{ color: "#fff" }}>Create Job</Link>
    </nav>
  );
}
