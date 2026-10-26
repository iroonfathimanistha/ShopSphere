import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ShoppingBag } from "lucide-react";

export default function Checkout({ cart, onPlaceOrder }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: ""
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) return;

    onPlaceOrder();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <main className="page-wrap">
        <div className="empty-state order-success">
          <CheckCircle size={54} />
          <span className="eyebrow">DEMO ORDER COMPLETE</span>
          <h1>Thank you, {form.name}!</h1>
          <p>
            Your sample order has been completed successfully in this demo.
            No payment was taken.
          </p>
          <Link to="/shop" className="button button-dark">
            Continue shopping
          </Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="page-wrap">
        <div className="empty-state">
          <ShoppingBag size={46} />
          <h1>Your cart is empty</h1>
          <Link to="/shop" className="button button-dark">
            Browse products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-wrap">
      <div className="page-title">
        <span className="eyebrow">ALMOST THERE</span>
        <h1>Checkout</h1>
        <p>Enter your details to complete the demo order.</p>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Contact and delivery details</h2>

          <label>
            Full name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </label>

          <label>
            Email address
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </label>

          <label>
            Phone number
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              required
            />
          </label>

          <label>
            Delivery address
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              autoComplete="street-address"
              rows="3"
              required
            />
          </label>

          <label>
            City
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              autoComplete="address-level2"
              required
            />
          </label>

          <button className="button button-coral full-button" type="submit">
            Place demo order · Rs. {total.toLocaleString()}
          </button>

          <p className="demo-note">
            No real payment, email, or delivery service is connected.
          </p>
        </form>

        <aside className="order-summary">
          <h2>Your order</h2>

          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <strong>{item.name}</strong>
                <span>Quantity: {item.quantity}</span>
              </div>
              <span>
                Rs. {(item.price * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            <strong>Rs. {total.toLocaleString()}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}