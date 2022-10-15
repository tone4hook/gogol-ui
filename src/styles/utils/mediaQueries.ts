export type TBreakPointKeys = "sm" | "md" | "lg" | "xl" | "xxl";

export const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};

export const mq = (bp: TBreakPointKeys): string =>
    `@media (min-width: ${breakpoints[bp]}px)`;
