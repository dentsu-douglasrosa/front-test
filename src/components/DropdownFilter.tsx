import React from "react";
import '../styles/filters.scss';
import { DropdownFilterProps } from "src/types/filters.type";
import { useFilter } from "src/hooks/useFilter";
import Button from "./Button";

const DropdownFilter = (props : DropdownFilterProps): JSX.Element => {
  const { state, controller } = useFilter(props)

  return (
    <div className="filters--group">
      <Button iconRightClassName={state.iconRightClassName} size="small" label={state.title} onClick={controller.onClickDropdownFilter} />
      
      {state.visible && (
        <ul>
          {state.items?.map(item => {
            return (
                <li key={`${state.type}--${item.id}`}>
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