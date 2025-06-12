import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: 16, background: "#222", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 12px", color: "#fff" }}>Dashboard</Link>
      <Link to="/jobs" style={{ margin: "0 12px", color: "#fff" }}>Jobs</Link>
      <Link to="/expenses" style={{ margin: "0 12px", color: "#fff" }}>Expenses</Link>
      <Link to="/general-expenses" style={{ margin: "0 12px", color: "#fff" }}>Other Expenses</Link>
      <Link to="/login" style={{ margin: "0 12px", color: "#fff" }}>Login</Link>
    </nav>
  );
}
