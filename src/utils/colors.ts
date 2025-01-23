export const hexToRgba = (hex: string, alpha: number = 1): string => {
    const sanitizedHex = hex.replace(/^#/, "");
  
    const fullHex =
      sanitizedHex.length === 3
        ? sanitizedHex
            .split("")
            .map((char) => char + char)
            .join("")
        : sanitizedHex;
  
    if (fullHex.length !== 6) {
      throw new Error("Invalid hex color format");
    }
  
    const r = parseInt(fullHex.slice(0, 2), 16);
    const g = parseInt(fullHex.slice(2, 4), 16);
    const b = parseInt(fullHex.slice(4, 6), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }