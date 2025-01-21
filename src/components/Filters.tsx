import React from "react";
import '../styles/filters.scss';
import { useFilters } from "src/hooks/useFilters";
import SidebarFilter from "./SideBarFilter";
import DropdownFilter from "./DropdownFilter";
import Button from "./Button";

const Filters = (): JSX.Element => {
  const { state, controller } = useFilters();

  return (
    <div className="filters">
      <aside className="filters--sidebar">
        <div className="filters-title">
          <i className="fas fa-sliders filters-title-icon"></i>
          <h2>{state.filtersLabel}</h2>
        </div>
        
        <SidebarFilter
          type={"category"}
          title={state.categoriesLabel}
          items={state.categories}
        />

        <SidebarFilter
          type={"author"}
          title={state.authorsLabel}
          items={state.authors}
        />

        <div className="apply-filters">
          <Button
            size='small'
            type='primary'
            width={state.applyFiltersWidth}
            onClick={controller.onApplyFilters}
            label={state.applyFiltersLabel}
          />
        </div>

      </aside>
      <div className="filters--mobile">
        <DropdownFilter
            type={"author"}
            title={state.authorsLabel}
            items={state.authors}
        />

        <DropdownFilter 
          type={"category"}
          title={state.categoriesLabel}
          items={state.categories}
        />
          
      </div>
    </div>
  );
};

export default Filters;