import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const categories = [
  "All",
  "Fashion",
  "Electronics",
  "Home",
  "Accessories"
];

export default function Shop({ onAddToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  return (
    <main className="page-wrap">
      <section className="shop-heading">
        <span className="eyebrow">THE SHOPSPHERE EDIT</span>
        <h1>Find your favourites.</h1>
        <p>Explore our collection of everyday essentials.</p>
      </section>

      <div className="shop-toolbar">
        <label className="search-box">
          <Search size={19} />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
          />
        </label>

        <label className="sort-control">
          <span>Sort by</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="rating">Highest rated</option>
          </select>
        </label>
      </div>

      <div className="category-filters">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "filter-chip active" : "filter-chip"}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="results-heading">
        <span>{filteredProducts.length} products</span>
        <button
          className="text-link"
          onClick={() => {
            setSearch("");
            setCategory("All");
            setSort("featured");
          }}
        >
          Reset filters
        </button>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try another search or select a different category.</p>
          <button
            className="button button-dark"
            onClick={() => {
              setSearch("");
              setCategory("All");
            }}
          >
            Show all products
          </button>
        </div>
      )}
    </main>
  );
}