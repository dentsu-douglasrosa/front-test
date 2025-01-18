import React from "react";
import '../styles/filters.scss';
import { DropdownFilterProps } from "src/types/filters.type";
import { useFilter } from "src/hooks/useFilter";

const DropdownFilter = ({
  type,
  title,
  items,
  setShouldShow,
  visible
} : DropdownFilterProps): JSX.Element => {
  const { state, controller } = useFilter({ type })

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
                  <button className={controller.isFilterIdApplied(item.id) ? "filter-applied" : undefined} onClick={() => controller.onFilterChange(item.id)}>{item.name}</button>
                </li>
              )
            })}
        </ul>
      )}
    </div>
  )
}

export default DropdownFilter;