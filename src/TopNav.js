import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <nav>
      <Link to="/">Home</Link> | {' '}
      <Link to="/register">Register</Link> | {' '}
      <Link to="/login">Login</Link> | {' '}
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
