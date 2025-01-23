import { UseProps } from "./_shared.type"

export interface UseButtonProps extends ButtonProps {
}

export type ButtonSize = "small" | "medium" | "large"
export type ButtonTypes = "primary" | "secondary" | "tertiary"

export interface ButtonProps {
    onClick: (val: any) => void
    onRightIconClick?: (val: any) => void
    label: string
    type?: ButtonTypes
    size?: ButtonSize
    iconLeftClassName?: string
    iconRightClassName?: string
    backgroundColor?: string
    color?: string
    width?: number | string
    hoverBackgroundColor?: string
}

export interface UseButtonReturn extends UseProps {
    state: UseProps["state"] & {
        label: string
        buttonClassNames: string
        styles: React.CSSProperties
        iconLeftClassName: string | undefined
        iconRightClassName: string | undefined
    }
    controller: UseProps["controller"] & {
        onClick: (val: any) => void
    }
}
