import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            exports: "named",
            sourcemap: true,
        },
        {
            file: "dist/index.es.js",
            format: "es",
            exports: "named",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        nodeResolve({
            browser: true,
        }),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        commonjs({
            include: ["node_modules/**"],
            exclude: ["**/storybook/**"],
        }),
    ],
};
