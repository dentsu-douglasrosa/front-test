import React from "react";
import '../styles/filters.scss';
import { type SidebarFilterProps } from "src/types/filters.type";
import { useFilter } from "src/hooks/useFilter";

const SidebarFilter = ({ type, title, items }: SidebarFilterProps): JSX.Element => {
  const { state, controller } = useFilter({ type })

  return (
    <div className="filters__group">
      <h3>{title}</h3>
      <ul>
        {items?.map(item => {
          return (
            <li key={`${type}__${item.id}`}>
              <button onClick={() => controller.onFilterChange(item.id)}>{item.name}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SidebarFilter;