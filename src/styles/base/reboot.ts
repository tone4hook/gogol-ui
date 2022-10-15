/* eslint-disable import/no-extraneous-dependencies */
import { css } from "@emotion/react";
import prefix from "./prefix";
import { fontSizes, headingFontWeight } from "../theme/typography";

// css reboot
const styles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    @media (prefers-reduced-motion: no-preference) {
        :root {
            scroll-behavior: smooth;
        }
    }

    body {
        margin: 0;
        font-family: var(--${prefix}body-font-family);
        font-size: var(--${prefix}body-font-size);
        font-weight: var(--${prefix}body-font-weight);
        line-height: var(--${prefix}body-line-height);
        color: var(--${prefix}body-color);
        text-align: var(--${prefix}body-text-align);
        background-color: var(--${prefix}body-bg);
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    hr {
        margin: 1rem 0;
        color: inherit;
        border: 0;
        border-top: 1px solid;
        opacity: 0.25;
    }

    h6,
    h5,
    h4,
    h3,
    h2,
    h1 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-family: var(--${prefix}heading-font-family);
        font-weight: ${headingFontWeight};
        line-height: 1.2;
    }

    h1 {
        font-size: calc(1.375rem + 1.5vw);
    }
    @media (min-width: 1200px) {
        h1 {
            font-size: ${fontSizes.xxlarge};
        }
    }

    h2 {
        font-size: calc(1.325rem + 0.9vw);
    }
    @media (min-width: 1200px) {
        h2 {
            font-size: ${fontSizes.xlarge};
        }
    }

    h3 {
        font-size: calc(1.3rem + 0.6vw);
    }
    @media (min-width: 1200px) {
        h3 {
            font-size: ${fontSizes.large};
        }
    }

    h4 {
        font-size: calc(1.275rem + 0.3vw);
    }
    @media (min-width: 1200px) {
        h4 {
            font-size: ${fontSizes.mediumXLarge};
        }
    }

    h5 {
        font-size: ${fontSizes.mediumLarge};
    }

    h6 {
        font-size: ${fontSizes.medium};
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: ${fontSizes.normal};
    }

    abbr[title] {
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
        cursor: help;
        -webkit-text-decoration-skip-ink: none;
        text-decoration-skip-ink: none;
    }

    address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit;
    }

    ol,
    ul {
        padding-left: 2rem;
    }

    ol,
    ul,
    dl {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
        margin-bottom: 0;
    }

    dt {
        font-weight: 700;
    }

    dd {
        margin-bottom: 0.5rem;
        margin-left: 0;
    }

    blockquote {
        margin: 0 0 1rem;
    }

    b,
    strong {
        font-weight: bolder;
    }

    small {
        font-size: ${fontSizes.small};
    }

    mark {
        padding: 0.1875em;
        background-color: var(--${prefix}highlight-bg);
    }

    sub,
    sup {
        position: relative;
        font-size: 0.75em;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    a {
        color: var(--${prefix}link-color);
        text-decoration: underline;
    }
    a:hover {
        color: var(--${prefix}link-hover-color);
    }

    a:not([href]):not([class]),
    a:not([href]):not([class]):hover {
        color: inherit;
        text-decoration: none;
    }

    pre,
    code,
    kbd,
    samp {
        font-family: var(--${prefix}font-monospace);
        font-size: 1em;
    }

    pre {
        display: block;
        margin-top: 0;
        margin-bottom: 1rem;
        overflow: auto;
        font-size: ${fontSizes.small};
    }
    pre code {
        font-size: inherit;
        color: inherit;
        word-break: normal;
    }

    code {
        font-size: 0.875em;
        color: var(--${prefix}code-color);
        word-wrap: break-word;
    }
    a > code {
        color: inherit;
    }

    kbd {
        padding: 0.1875rem 0.375rem;
        font-size: ${fontSizes.small};
        color: var(--${prefix}body-bg);
        background-color: var(--${prefix}body-color);
        border-radius: 0.25rem;
    }
    kbd kbd {
        padding: 0;
        font-size: 1em;
    }

    figure {
        margin: 0 0 1rem;
    }

    img,
    svg {
        vertical-align: middle;
    }

    table {
        caption-side: bottom;
        border-collapse: collapse;
    }

    caption {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        color: #6c757d;
        text-align: left;
    }

    th {
        text-align: inherit;
        text-align: -webkit-match-parent;
    }

    thead,
    tbody,
    tfoot,
    tr,
    td,
    th {
        border-color: inherit;
        border-style: solid;
        border-width: 0;
    }

    label {
        display: inline-block;
    }

    button {
        border-radius: 0;
    }

    button:focus:not(:focus-visible) {
        outline: 0;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button,
    select {
        text-transform: none;
    }

    [role="button"] {
        cursor: pointer;
    }

    select {
        word-wrap: normal;
    }
    select:disabled {
        opacity: 1;
    }

    [list]:not([type="date"]):not([type="datetime-local"]):not([type="month"]):not([type="week"]):not([type="time"])::-webkit-calendar-picker-indicator {
        display: none !important;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }
    button:not(:disabled),
    [type="button"]:not(:disabled),
    [type="reset"]:not(:disabled),
    [type="submit"]:not(:disabled) {
        cursor: pointer;
    }

    ::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    textarea {
        resize: vertical;
    }

    fieldset {
        min-width: 0;
        padding: 0;
        margin: 0;
        border: 0;
    }

    legend {
        float: left;
        width: 100%;
        padding: 0;
        margin-bottom: 0.5rem;
        font-size: calc(1.275rem + 0.3vw);
        line-height: inherit;
    }
    @media (min-width: 1200px) {
        legend {
            font-size: ${fontSizes.mediumLarge};
        }
    }
    legend + * {
        clear: left;
    }

    ::-webkit-datetime-edit-fields-wrapper,
    ::-webkit-datetime-edit-text,
    ::-webkit-datetime-edit-minute,
    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-year-field {
        padding: 0;
    }

    ::-webkit-inner-spin-button {
        height: auto;
    }

    [type="search"] {
        outline-offset: -2px;
        -webkit-appearance: textfield;
    }

    /* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
    }

    ::file-selector-button {
        font: inherit;
        -webkit-appearance: button;
    }

    output {
        display: inline-block;
    }

    iframe {
        border: 0;
    }

    summary {
        display: list-item;
        cursor: pointer;
    }

    progress {
        vertical-align: baseline;
    }

    [hidden] {
        display: none !important;
    }
`;

export default styles;
