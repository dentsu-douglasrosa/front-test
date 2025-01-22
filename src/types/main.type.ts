import { UseProps } from "./_shared.type"
import { SortTypes } from "./filters.type"

export interface MainProps {
}

export type UseMainProps = MainProps | undefined

export interface UseMainReturn extends UseProps {
    state: UseProps["state"] & {
        isOnPostDetails: boolean
        mainLabel: string
        sortByLabel: string
    }
    controller: UseProps["controller"] & {
        onClickSorting: () => void
    }
}
