import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ShoppingCart, Star } from "lucide-react";
import products from "../data/products";

export default function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="page-wrap empty-state">
        <h1>Product not found</h1>
        <Link to="/shop" className="button button-dark">
          Return to shop
        </Link>
      </main>
    );
  }

  return (
    <main className="page-wrap">
      <Link to="/shop" className="back-link">
        <ArrowLeft size={17} /> Back to shop
      </Link>

      <section className="product-detail">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
          {product.badge && (
            <span className="product-badge">{product.badge}</span>
          )}
        </div>

        <div className="detail-info">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>

          <div className="product-rating detail-rating">
            <Star size={17} fill="currentColor" />
            <span>{product.rating} / 5</span>
          </div>

          <div className="detail-price">
            <strong>Rs. {product.price.toLocaleString()}</strong>
            {product.oldPrice && (
              <del>Rs. {product.oldPrice.toLocaleString()}</del>
            )}
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="detail-points">
            <p><Check size={17} /> Carefully selected essentials</p>
            <p><Check size={17} /> Easy online browsing</p>
            <p><Check size={17} /> Demo checkout experience</p>
          </div>

          <button
            className="button button-dark detail-add"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart size={18} /> Add to cart
          </button>

          <p className="demo-note">
            Product information and prices are sample data for this portfolio
            project.
          </p>
        </div>
      </section>
    </main>
  );
}