import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`}>
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </Link>

        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>

        <div className="product-rating">
          <Star size={15} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        <div className="product-prices">
          <strong>Rs. {product.price.toLocaleString()}</strong>
          {product.oldPrice && (
            <del>Rs. {product.oldPrice.toLocaleString()}</del>
          )}
        </div>

        <button
          className="button button-dark add-cart-button"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}