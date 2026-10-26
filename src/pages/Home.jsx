import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home({ onAddToCart }) {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">EVERYDAY ESSENTIALS, REIMAGINED</span>
          <h1>
            Discover products
            <br />
            that fit <span>your life.</span>
          </h1>
          <p>
            Shop a thoughtful collection of fashion, accessories,
            electronics, and home essentials.
          </p>

          <Link to="/shop" className="button button-coral">
            Shop Collection <ArrowRight size={18} />
          </Link>

          <div className="hero-note">
            <span className="hero-dot" />
            Discover your next everyday favourite
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85"
            alt="Modern lifestyle retail display"
          />
          <div className="hero-image-label">
            <span>THE EVERYDAY EDIT</span>
            <strong>Better choices. Brighter days.</strong>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefit">
          <Truck />
          <div>
            <strong>Convenient shopping</strong>
            <span>Browse from anywhere</span>
          </div>
        </div>
        <div className="benefit">
          <ShieldCheck />
          <div>
            <strong>Simple and secure UI</strong>
            <span>A smooth shopping experience</span>
          </div>
        </div>
        <div className="benefit">
          <Headphones />
          <div>
            <strong>Here to help</strong>
            <span>Customer-first experience</span>
          </div>
        </div>
        <div className="benefit">
          <RotateCcw />
          <div>
            <strong>Easy browsing</strong>
            <span>Find your everyday essentials</span>
          </div>
        </div>
      </section>

      <section className="section section-wrap" id="featured">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>
            <h2>Our collection</h2>
            <p>Everyday favourites, all in one place.</p>
          </div>

          <Link to="/shop" className="text-link">
            View all products <ArrowRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      <section className="story-section section-wrap" id="about">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
            alt="Warm and modern living room"
            loading="lazy"
          />
        </div>
        <div className="story-content">
          <span className="eyebrow">THE SHOPSPHERE STORY</span>
          <h2>More than a store. A simpler way to shop.</h2>
          <p>
            We bring together useful everyday products in one easy-to-explore
            collection. Discover pieces for your home, personal style, and
            daily routine.
          </p>
          <Link to="/shop" className="button button-dark">
            Explore the shop <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

function Newsletter() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thanks for subscribing! This is a demo form.");
    event.currentTarget.reset();
  }

  return (
    <section className="newsletter section-wrap">
      <div>
        <span className="eyebrow">STAY IN THE LOOP</span>
        <h2>Good things, delivered occasionally.</h2>
        <p>Get updates about new arrivals and curated collections.</p>
      </div>

      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
          required
        />
        <button className="button button-coral" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}