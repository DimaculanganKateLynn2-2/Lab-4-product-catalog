function ProductCard({ title, price, category = 'General', inStock, onAddToCart, children }) {
  const formattedPrice = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  return (
    <article className={`product-card ${inStock ? '' : 'out-of-stock'}`}>
      <div className="card-top">
        <span className="category">{category}</span>
        {children && <div className="special-label">{children}</div>}
      </div>
      <h2>{title}</h2>
      <p className="price">{formattedPrice}</p>
      <p className={`stock-label ${inStock ? 'available' : 'unavailable'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button
        type="button"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
