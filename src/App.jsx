import "./App.css";
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import products from './data/products.js';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');
  const [searchText, setSearchText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  // Wait until typing stops for 300ms before filtering.
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchText]);

  // Calculate matching products without changing the original array.
  const filteredProducts = [...products].filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(debouncedSearch.trim().toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sortOrder === 'low-to-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-to-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  function handleClearFilters() {
    setSearchText('');
    setDebouncedSearch('');
    setCategory('All');
    setSortOrder('default');
  }

  function handleAddToCart(title) {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(title);
  }

  return (
    <>
      <header className="store-header">
        <div className="header-content">
          <p className="store-caption">STUDENT PRODUCT CATALOG</p>
          <h1>CvSU Mini Store</h1>
          <p>Discover everyday essentials for school and beyond.</p>
        </div>
      </header>
      <main className="container">
        <div className="cart-message" role="status">
          <span className="cart-icon" aria-hidden="true">🛒</span>
          <p>{cartCount === 0
            ? 'Your cart is empty.'
            : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`}</p>
        </div>
        <SearchBar
          searchText={searchText}
          category={category}
          sortOrder={sortOrder}
          onSearchChange={setSearchText}
          onCategoryChange={setCategory}
          onSortChange={setSortOrder}
          onClearFilters={handleClearFilters}
        />
        <div className="section-heading">
          <h2>Our Products</h2>
          <span role="status">Showing {filteredProducts.length} of {products.length} products</span>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <h2>No products found.</h2>
            <p>Try a different keyword or category.</p>
            <button className="clear-button" type="button" onClick={handleClearFilters}>
              Clear Filters
            </button>
          </div>
        ) : (
          <section className="product-grid" aria-label="Product catalog">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
                onAddToCart={handleAddToCart}
              >
                {product.id === 1 && <span className="badge new">New</span>}
                {product.id === 2 && <span className="badge sale">Sale</span>}
              </ProductCard>
            ))}
          </section>
        )}
      </main>
      <footer> CvSU Mini Store · React Live Search Laboratory Exercise 4 </footer>
    </>
  );
}

export default App;
