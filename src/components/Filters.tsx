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
          iconRightClassName={state.iconRightClassNameCategory}
          onToggleDropdown={() => controller.onToggleDropdown("category")}
          isFilterIdApplied={controller.isFilterIdApplied}
          type={"category"}
          title={state.categoriesLabel}
          items={state.categories}
          onSelectItem={controller.onSelectItem}
        />

        <SidebarFilter
          iconRightClassName={state.iconRightClassNameAuthor}
          onToggleDropdown={() => controller.onToggleDropdown("author")}
          isFilterIdApplied={controller.isFilterIdApplied}
          type={"author"}
          title={state.authorsLabel}
          items={state.authors}
          onSelectItem={controller.onSelectItem}
        />

        <div className="apply-filters">
          <Button
            size='medium'
            type='primary'
            width={state.applyFiltersWidth}
            onClick={controller.onApplyFilters}
            label={state.applyFiltersLabel}
          />
        </div>

      </aside>
      <div className="filters--mobile">
        <div className="filters--mobile-buttons">
          <DropdownFilter 
            iconRightClassName={state.iconRightClassNameCategory}
            isFilterIdApplied={controller.isFilterIdApplied}
            type={"category"}
            title={state.categoryNamesSelected ?? state.categoriesLabel}
            items={state.categories}
            onSelectItem={controller.onSelectItem}
            onToggleDropdown={() => controller.onToggleDropdown("category")}
            onRemoveItems={controller.onRemoveItems}
          />
          <DropdownFilter
            iconRightClassName={state.iconRightClassNameAuthor}
            isFilterIdApplied={controller.isFilterIdApplied}
            type={"author"}
            title={state.authorNamesSelected ?? state.authorsLabel}
            items={state.authors}
            onSelectItem={controller.onSelectItem}
            onToggleDropdown={() => controller.onToggleDropdown("author")}
            onRemoveItems={controller.onRemoveItems}
          />

          <div className="main-sort">
            <span
              onClick={controller.onClickSorting}
              className="main-sort-by-type"
            >
              {state.sortByType}
              <i className="fas fa-arrow-right-arrow-left"></i>
            </span>
          </div>
        </div>
        <div className={state.classNamesForDropdownItems}>
          <ul>
            {state.dropdownOpen && state.items?.map(item => {
              return (
                <li key={`${state.dropdownOpen}--${item.id}`}>
                  <button 
                    className={controller.isFilterIdApplied(item.id, state.dropdownOpen!) ? "filter-applied" : undefined} 
                    onClick={() => controller.onSelectItem(item.id, state.dropdownOpen!)}>{item.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;