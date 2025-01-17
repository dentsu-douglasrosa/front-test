import { Author } from "./authors.type";
import { Category } from "./categories.type";
import { UseProps } from "./global.type";

export type Filter = AuthorFilter | CategoryFilter
export interface AuthorFilter extends Author {}
export interface CategoryFilter extends Category {}

export type FilterTypes = "category" | "author"

export type FilterChangeCallback = (type: FilterTypes, value: string) => void;

export interface FiltersProps {

}

export interface DropdownFilterProps {
    type: FilterTypes
    title: string
    items: Filter[]
    visible: boolean
    setShouldShow: React.Dispatch<React.SetStateAction<boolean>>
  }

export interface SidebarFilterProps {
  type: FilterTypes
  title: string
  items: Filter[]
}

export interface UseFiltersReturn extends UseProps {
    state: UseProps["state"] & {
        categoriesLabel: string
        authorsLabel: string
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