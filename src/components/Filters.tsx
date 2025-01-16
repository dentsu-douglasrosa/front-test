import React, { useState } from "react";
import '../styles/filters.scss';

type FilterChangeCallback = (type: "category" | "author", value: string) => void;

interface FiltersProps {
  onFilterChange: FilterChangeCallback;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {

  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);

  const categories: string[] = ["Tech", "Lifestyle", "Education", "Business"];
  const authors: string[] = ["Alice", "Bob", "Charlie", "Diana"];

  return (
    <div className="filters">
      <aside className="filters__sidebar">
        <h2>
          <span className="filters__icon"></span> Filters
        </h2>
        <div className="filters__group">
          <h3>Category</h3>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <button onClick={() => onFilterChange("category", category)}>{category}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="filters__group">
          <h3>Author</h3>
          <ul>
            {authors.map((author) => (
              <li key={author}>
                <button onClick={() => onFilterChange("author", author)}>{author}</button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="filters__mobile">
        <button
          className="filters__dropdown-button"
          onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
        >
          Category
        </button>
        {showCategoryDropdown && (
          <ul className="filters__dropdown">
            {categories.map((category) => (
              <li key={category}>
                <button onClick={() => onFilterChange("category", category)}>{category}</button>
              </li>
            ))}
          </ul>
        )}
        <button
          className="filters__dropdown-button"
          onClick={() => setShowAuthorDropdown(!showAuthorDropdown)}
        >
          Author
        </button>
        {showAuthorDropdown && (
          <ul className="filters__dropdown">
            {authors.map((author) => (
              <li key={author}>
                <button onClick={() => onFilterChange("author", author)}>{author}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filters;