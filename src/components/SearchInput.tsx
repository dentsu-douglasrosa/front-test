import React from 'react';
import '../styles/search-input.scss';
import { useSearchInput } from "src/hooks/useSearchInput";

interface SearchProps {

}

const SearchInput = (_: SearchProps): JSX.Element => {
  const { state, controller } = useSearchInput()

  return (
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search"
          value={state.query}
          onChange={controller.handleSearchChange}
          className='search-input'
        />
      </div>
  );
}

export default SearchInput;
