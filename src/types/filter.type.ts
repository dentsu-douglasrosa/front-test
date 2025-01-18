import { FilterTypes } from "./filters.type"
import { UseProps } from "./global.type"

export interface UseFilterProps {
    type: FilterTypes
}

export interface FilterProps {
}

export interface UseFilterReturn extends UseProps {
    state: UseProps["state"] & {
    }
    controller: UseProps["controller"] & {
        onFilterChange: (id: string) => void
        isFilterIdApplied: (id: string) => boolean
    }
}
