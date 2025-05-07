
import styles from '../styles/Home.module.css';


export function Nav() {
  return (
    <nav className="d-flex align-items-center justify-content-between p-2 border-bottom border-warning border-3">
      {/* Left-aligned logo */}
      <a className="p-2 ms-5" href="#">
        <img
          src="images/griffith_logo_modified.png"
          style={{ height: '50px' }}
          alt="Griffith Logo"
        />
      </a>

      {/* Right-aligned nav links */}
      <div className="nav nav-underline hstack gap-3 ms-auto me-5">
        <a className="nav-link text-dark fw-semibold" href="/">Home</a>
        <a className="nav-link text-dark fw-semibold" href="/login">Login</a>
        <a className="nav-link text-dark fw-semibold" href="/register">Register</a>
        <a className="nav-link text-dark fw-semibold" href="#">Properties</a>
      </div>
    </nav>
  );
}
