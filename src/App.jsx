import { useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import products from './data/products.js';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');

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
        <div className="section-heading">
          <h2>Our Products</h2>
          <span>{products.length} products</span>
        </div>
        <section className="product-grid" aria-label="Product catalog">
          {products.map((product) => (
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
      </main>
      <footer> CvSU Mini Store · React Props Laboratory Exercise 3 </footer>
    </>
  );
}

export default App;
