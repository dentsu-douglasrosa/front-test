import React from "react";
import '../styles/filters.scss';
import { type SidebarFilterProps } from "src/types/filters.type";
import { useFilter } from "src/hooks/useFilter";

const SidebarFilter = (props: SidebarFilterProps): JSX.Element => {
  const { state, controller } = useFilter(props)

  return (
    <div className="filters--group">
      <h3 className="title">{state.title}</h3>
      <ul>
        {state.items?.map(item => {
          return (
            <li key={`${state.type}--${item.id}`}>
              <button
                className={controller.isFilterIdApplied(item.id, state.type) ? "filter-applied" : undefined} 
                onClick={() => controller.onSelectItem(item.id, state.type)}
              >
                {item.name}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SidebarFilter;