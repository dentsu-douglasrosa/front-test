import { Author } from "./authors.type";
import { Category } from "./categories.type";
import { UseProps } from "./global.type";

export type Filter = AuthorFilter | CategoryFilter
export interface AuthorFilter extends Author {}
export interface CategoryFilter extends Category {}

export type FilterChangeCallback = (type: "category" | "author", value: string) => void;

export interface FiltersProps {
  onFilterChange: FilterChangeCallback;
}

export interface DropdownFilterProps {
    type: "author" | "category"
    title: string
    items: Filter[]
    visible: boolean
    setShouldShow: React.Dispatch<React.SetStateAction<boolean>>
    onFilterChange: FilterChangeCallback
  }

export interface SidebarFilterProps {
  type: "author" | "category"
  title: string
  items: Filter[]
  onFilterChange: FilterChangeCallback
}

export interface UseFiltersProps extends UseProps {
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