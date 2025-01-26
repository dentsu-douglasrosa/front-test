import { UseProps } from "./_shared.type"

export interface UseBreakpointsProps extends BreakpointsProps {
}

export interface BreakpointsProps {
}

export interface UseBreakpointsReturn extends UseProps {
    state: UseProps["state"] & {
        isMobile: boolean
    }
    controller: UseProps["controller"] & {
    }
}
