import React, { useState } from 'react';
import '../styles/search-input.scss';

interface SearchProps {

}

const SearchInput = (_: SearchProps): JSX.Element => {
  // TODO use selectors
  const data = ["AAA", "BBB"] 

  const [query, setQuery] = useState("");

  // TODO use slicers
  const [filteredResults, setFilteredResults] = useState(data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);
    setFilteredResults(data.filter((item) => item.toLowerCase().includes(searchTerm)));
  };

  return (
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
          className='search-input'
        />
      </div>
  );
}

export default SearchInput;
