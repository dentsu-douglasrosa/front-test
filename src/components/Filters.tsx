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
      <aside className="filters__sidebar">
        <div className="filters-title">
          <h2>{state.filtersLabel}</h2>
        </div>
        
        <SidebarFilter
          type={"category"}
          visible={!state.shouldShowCategories}
          title={state.categoriesLabel}
          items={state.categories}
        />

        <SidebarFilter
          type={"author"}
          visible={!state.shouldShowAuthors}
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
      <div className="filters__mobile">
        <DropdownFilter
            setShouldShow={controller.setShouldShowAuthors}
            visible={state.shouldShowAuthors}
            type={"author"}
            title={state.authorsLabel}
            items={state.authors}
        />

          <DropdownFilter 
            setShouldShow={controller.setShouldShowCategories}
            visible={state.shouldShowCategories}
            type={"category"}
            title={state.categoriesLabel}
            items={state.categories}
          />
          
      </div>
    </div>
  );
};

export default Filters;