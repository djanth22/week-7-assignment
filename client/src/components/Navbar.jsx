import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navigation">
        <Link className="nav-el" to="/">
          home
        </Link>
        <Link className="nav-el" to="/page1">
          feedback
        </Link>
        <Link className="nav-el" to="/booking">
          Booking
        </Link>
      </div>
    </>
  );
}
