import React from "react";
import '../styles/filters.scss';
import { useFilters } from "src/hooks/useFilters";
import { DropdownFilterProps, FiltersProps, type SidebarFilterProps } from "src/types/filters.type";

const SidebarFilter = ({ type, title, items, onFilterChange }: SidebarFilterProps): JSX.Element => {
  return (
    <div className="filters__group">
      <h3>{title}</h3>
      <ul>
        {items?.map(item => {
          return (
            <li key={`${type}__${item.id}`}>
              <button onClick={() => onFilterChange(type, item.id)}>{item.name}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const DropdownFilter = ({
  type,
  title,
  items,
  onFilterChange,
  setShouldShow,
  visible
} : DropdownFilterProps): JSX.Element => {
  return (
    <div>
      <button
        className="filters__dropdown-button"
        onClick={() => setShouldShow(state => !state)}
      >
        {title}
      </button>
      {visible && (
        <ul className="filters__dropdown">
          {items?.map(item => {
            return (
                <li key={`${type}__${item.id}`}>
                  <button onClick={() => onFilterChange(type, item.id)}>{item.name}</button>
                </li>
              )
            })}
        </ul>
      )}
    </div>
  )
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const { state, controller } = useFilters();

  return (
    <div className="filters">
      <aside className="filters__sidebar">
        <h2>
          <span className="filters__icon"></span> Filters
        </h2>
        
        <SidebarFilter
          type={"category"}
          title={state.categoriesLabel}
          items={state.categories}
          onFilterChange={onFilterChange} 
        />

        <SidebarFilter
          type={"author"}
          title={state.authorsLabel}
          items={state.authors}
          onFilterChange={onFilterChange} 
        />

      </aside>

      <div className="filters__mobile">
       <DropdownFilter 
          setShouldShow={controller.setShouldShowAuthors}
          visible={state.shouldShowAuthors}
          type={"author"}
          title={state.authorsLabel}
          items={state.authors}
          onFilterChange={onFilterChange} 
       />

        <DropdownFilter 
          setShouldShow={controller.setShouldShowCategories}
          visible={state.shouldShowCategories}
          type={"category"}
          title={state.categoriesLabel}
          items={state.categories}
          onFilterChange={onFilterChange} 
       />
        
      </div>
    </div>
  );
};

export default Filters;