
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="footer-bag" aria-hidden="true">
              ♧
            </span>
            <span>
              Shop<span className="brand-accent">Sphere</span>
            </span>
          </Link>

          <p>Thoughtful products for everyday living.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop all</Link>
          <Link to="/cart">Shopping cart</Link>
        </div>

        <div className="footer-links">
          <h4>Customer care</h4>
          <a href="mailto:hello@example.com">Email us</a>
          <a href="/#about">Our story</a>
          <span>Monday – Friday</span>
        </div>

        <div className="footer-links">
          <h4>Follow us</h4>
          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ShopSphere</span>
        <span>
          Built with React for learning and demonstration.
        </span>
      </div>
    </footer>
  );
}
