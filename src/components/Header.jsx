import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <ShoppingBag size={25} />
          <span>Shop<span className="brand-accent">Sphere</span></span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/shop" onClick={closeMenu}>Shop</NavLink>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <Link to="/cart" className="cart-link" aria-label="Shopping cart">
          <ShoppingBag size={19} />
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}