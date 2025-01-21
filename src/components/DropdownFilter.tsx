import React from "react";
import '../styles/filters.scss';
import { DropdownFilterProps } from "src/types/filters.type";
import { useFilter } from "src/hooks/useFilter";

const DropdownFilter = (props : DropdownFilterProps): JSX.Element => {
  const { state, controller } = useFilter(props)

  return (
    <div>
      <button
        className="filters__dropdown-button"
        onClick={() => controller.setShouldShow?.(state => !state)}
      >
        {state.title}
      </button>
      {state.visible && (
        <ul className="filters__dropdown">
          {state.items?.map(item => {
            return (
                <li key={`${state.type}__${item.id}`}>
                  <button 
                    className={controller.isFilterIdApplied(item.id) ? "filter-applied" : undefined} 
                    onClick={() => controller.onFilterChange(item.id)}>{item.name}
                  </button>
                </li>
              )
            })}
        </ul>
      )}
    </div>
  )
}

export default DropdownFilter;