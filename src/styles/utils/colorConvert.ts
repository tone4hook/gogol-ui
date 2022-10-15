export interface IRgb {
    r: number;
    g: number;
    b: number;
}

export interface IHsl {
    h: number;
    s: number;
    l: number;
}

// hex to rgb
export const hexToRGB = (h: string): IRgb => {
    let r: string | number = 0,
        g: string | number = 0,
        b: string | number = 0;

    // 3 digits or 6 digits
    if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];
    } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }

    return {
        r: +r,
        g: +g,
        b: +b,
    };
};

// hex to hsl
export const hexToHSL = (H: string, percent: number): string => {
    // Convert hex to RGB first
    const rgbObj = hexToRGB(H);
    let r: string | number = rgbObj.r;
    let g: string | number = rgbObj.g;
    let b: string | number = rgbObj.b;
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return `hsl(${h},${s}%,${l + percent}%)`;
};
