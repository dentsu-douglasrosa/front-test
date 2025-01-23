import { DropdownFilterProps, Filter, FilterTypes } from "./filters.type"
import { UseProps } from "./_shared.type"

export interface UseFilterProps extends FilterProps {
    onToggleDropdown: (type: FilterTypes) => void
}

export interface FilterProps {
  type: FilterTypes
  title: string
  items: Filter[]
  onSelectItem: (id: string, type: FilterTypes) => void
  isFilterIdApplied: (id: string, type: FilterTypes) => boolean
  onRemoveItems?: (type: FilterTypes) => void
  iconRightClassName: string
}

export interface UseFilterReturn extends UseProps {
    state: UseProps["state"] & {
        title: string
        items: Filter[]
        type: FilterTypes
        iconRightClassName: string
    }
    controller: UseProps["controller"] & {
        onSelectItem: (id: string, type: FilterTypes) => void
        isFilterIdApplied: (id: string, type: FilterTypes) => boolean
        onToggleDropdown: (type: FilterTypes) => void
        onRemoveItems: ((type: FilterTypes) => void) | undefined
    }
}
