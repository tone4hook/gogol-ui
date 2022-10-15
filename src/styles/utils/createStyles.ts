// eslint-disable-next-line import/no-extraneous-dependencies
import { Interpolation, Theme } from "@emotion/react";

export const createStyles = <T extends { [key: string]: Interpolation<Theme> }>(
    arg: T
): T => arg;
