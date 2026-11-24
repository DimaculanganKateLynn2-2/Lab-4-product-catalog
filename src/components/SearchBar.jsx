function SearchBar({ searchText, category, sortOrder, onSearchChange,
  onCategoryChange, onSortChange, onClearFilters }) {
  return (
    <section className="search-bar" aria-label="Search and filter products">
      <div className="filter-field">
        <label htmlFor="search">Search products</label>
        <input id="search" type="search" placeholder="Search by product name..."
          value={searchText} onChange={(event) => onSearchChange(event.target.value)} />
      </div>
      <div className="filter-field">
        <label htmlFor="category">Category</label>
        <select id="category" value={category}
          onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="School Supplies">School Supplies</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="sort">Sort by</label>
        <select id="sort" value={sortOrder}
          onChange={(event) => onSortChange(event.target.value)}>
          <option value="default">Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      <button className="clear-button" type="button" onClick={onClearFilters}>
        Clear Filters
      </button>
    </section>
  );
}

export default SearchBar;
