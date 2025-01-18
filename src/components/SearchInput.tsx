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
          placeholder={state.inputPlaceholder}
          value={state.query}
          onChange={controller.handleSearchChange}
          className='search-input'
        />
        <button onClick={() => controller.onClickButton} className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
  );
}

export default SearchInput;
