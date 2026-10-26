import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function Cart({ cart, onUpdateQuantity, onRemove }) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="page-wrap">
        <div className="empty-state">
          <ShoppingBag size={48} strokeWidth={1.3} />
          <h1>Your cart is waiting.</h1>
          <p>Explore the collection and add something you love.</p>
          <Link to="/shop" className="button button-dark">
            Explore products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-wrap">
      <div className="page-title">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1>Shopping cart</h1>
        <p>{cart.length} different product(s) in your cart.</p>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <span className="product-category">{item.category}</span>
                <Link to={`/product/${item.id}`} className="product-name">
                  {item.name}
                </Link>
                <strong>Rs. {item.price.toLocaleString()}</strong>

                <div className="quantity-control">
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity - 1)
                    }
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity + 1)
                    }
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="cart-item-end">
                <strong>
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </strong>
                <button
                  className="remove-button"
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            </article>
          ))}

          <Link to="/shop" className="text-link">
            Continue shopping
          </Link>
        </section>

        <aside className="order-summary">
          <h2>Order summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Calculated in demo</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>Rs. {subtotal.toLocaleString()}</strong>
          </div>

          <Link to="/checkout" className="button button-coral full-button">
            Continue to checkout
          </Link>

          <p className="demo-note">
            This demonstration does not charge money or process payments.
          </p>
        </aside>
      </div>
    </main>
  );
}