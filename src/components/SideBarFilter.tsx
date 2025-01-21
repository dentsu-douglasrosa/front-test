import React from "react";
import '../styles/filters.scss';
import { type SidebarFilterProps } from "src/types/filters.type";
import { useFilter } from "src/hooks/useFilter";

const SidebarFilter = (props: SidebarFilterProps): JSX.Element => {
  const { state, controller } = useFilter(props)

  return (
    <div className="filters--group">
      <h3>{state.title}</h3>
      <ul>
        {state.items?.map(item => {
          return (
            <li key={`${state.type}--${item.id}`}>
              <button className={controller.isFilterIdApplied(item.id) ? "filter-applied" : undefined} onClick={() => controller.onFilterChange(item.id)}>{item.name}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SidebarFilter;