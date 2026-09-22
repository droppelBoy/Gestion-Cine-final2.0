function SearchBar({ search, handleSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control form-control-lg bg-dark text-white border-secondary shadow-sm"
        placeholder="🔍 Buscar por título o género..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;