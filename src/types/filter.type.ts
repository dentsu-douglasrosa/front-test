import { DropdownFilterProps, Filter, FilterTypes } from "./filters.type"
import { UseProps } from "./_shared.type"

export interface UseFilterProps extends FilterProps {
}

export interface FilterProps {
  type: FilterTypes
  title: string
  items: Filter[]
}

export interface UseFilterReturn extends UseProps {
    state: UseProps["state"] & {
        title: string
        items: Filter[]
        visible: boolean
    }
    controller: UseProps["controller"] & {
        onFilterChange: (id: string) => void
        isFilterIdApplied: (id: string) => boolean
    }
}
