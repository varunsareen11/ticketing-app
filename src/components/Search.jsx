const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search with Title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
