import { UseProps } from "./global.type"

export interface UseSearchInputProps {
}

export interface SearchInputProps {
}

export interface UseSearchInputReturn extends UseProps {
    state: UseProps["state"] & {
        query: string
    }
    controller: UseProps["controller"] & {
        handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
}
