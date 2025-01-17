import React from "react";
import '../styles/filters.scss';
import { useFilters } from "src/hooks/useFilters";
import { FiltersProps } from "src/types/filters.type";
import SidebarFilter from "./SideBarFilter";
import DropdownFilter from "./DropdownFilter";

const Filters = (): JSX.Element => {
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
        />

        <SidebarFilter
          type={"author"}
          title={state.authorsLabel}
          items={state.authors}
        />

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