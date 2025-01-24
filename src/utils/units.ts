const BASE_FONT_SIZE = 16;

export const rem = (valueInPx: number) => {
    if(valueInPx === 1) return `${valueInPx}px`;

    return `${valueInPx/BASE_FONT_SIZE}rem`
}