import { UseProps } from "./_shared.type"

export interface HeaderProps {
}

export type UseHeaderProps = HeaderProps | undefined

export interface UseHeaderReturn extends UseProps {
    state: UseProps["state"] & {
       
    }
    controller: UseProps["controller"] & {
        onClick: () => void
    }
}
