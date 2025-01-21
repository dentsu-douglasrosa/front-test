import { UseProps } from "./_shared.type"

export interface SidebarProps {
}

export type UseSidebarProps = SidebarProps | undefined

export interface UseSidebarReturn extends UseProps {
    state: UseProps["state"] & {
        isOnPostDetails: boolean
    }
    controller: UseProps["controller"] & {
        onClickBack: () => void
    }
}
