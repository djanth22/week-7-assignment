import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h2>Not Found</h2>
      <Link className="nav-el" to="/">
        Go Home
      </Link>
    </div>
  );
}
