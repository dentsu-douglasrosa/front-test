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
  setShouldShow: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SidebarFilterProps extends FilterProps {
}
export interface UseFiltersReturn extends UseProps {
    state: UseProps["state"] & {
        categoriesLabel: string
        authorsLabel: string
        filtersLabel: string
        authors: AuthorFilter[]
        categories: CategoryFilter[]
        loading: boolean
        shouldShowCategories: boolean
        shouldShowAuthors: boolean
    }
    controller: UseProps["controller"] & {
        setShouldShowCategories: React.Dispatch<React.SetStateAction<boolean>>
        setShouldShowAuthors: React.Dispatch<React.SetStateAction<boolean>>
    }
}