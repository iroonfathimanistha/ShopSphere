import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-wrap">
      <div className="empty-state">
        <span className="eyebrow">404 — PAGE NOT FOUND</span>
        <h1>Looks like you're lost.</h1>
        <p>The page you requested does not exist.</p>
        <Link to="/" className="button button-dark">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}