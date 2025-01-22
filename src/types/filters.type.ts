import { Author } from "./authors.type";
import { Category } from "./categories.type";
import { UseProps } from "./_shared.type";
import { FilterProps } from "./filter.type";

export type Filter = AuthorFilter | CategoryFilter
export interface AuthorFilter extends Author {}
export interface CategoryFilter extends Category {}

export type FilterTypes = "category" | "author"

export type FilterChangeCallback = (type: FilterTypes, value: string) => void;

export interface FiltersProps {

}

export interface DropdownFilterProps extends FilterProps {
    onToggleDropdown: (type: FilterTypes) => void
}

export interface SidebarFilterProps extends FilterProps {
    onToggleDropdown: (type: FilterTypes) => void
}
export interface UseFiltersReturn extends UseProps {
    state: UseProps["state"] & {
        categoriesLabel: string
        authorsLabel: string
        filtersLabel: string
        authors: AuthorFilter[]
        categories: CategoryFilter[]
        loading: boolean
        applyFiltersLabel: string
        isOnPostDetails: boolean
        iconRightClassNameAuthor: string
        iconRightClassNameCategory: string
        shouldShowItems: Record<FilterTypes, boolean>
        items: Filter[]
        dropdownOpen: FilterTypes | undefined
    }
    controller: UseProps["controller"] & {
        onApplyFilters: () => void
        onSelectItem: (id: string, type: FilterTypes) => void
        isFilterIdApplied: (id: string, type: FilterTypes) => boolean
        onToggleDropdown: (type: FilterTypes) => void
    }
}