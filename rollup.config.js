import resolve from '@rollup/plugin-node-resolve';

import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import replace from '@rollup/plugin-replace';

import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const aliasSetting = {
    entries: [
        // 例
        // find: 'animejs',
        // replacement: 'animejs/lib/anime.es.js',
        // {
        //     find: 'vue',
        //     replacement: 'vue/dist/vue.esm-bundler.js', // vueはbundlerを使用
        // },
        {
            find: 'animejs',
            replacement: 'animejs/lib/anime.es.js',
        },
    ],
};

export const deploy = {
    input: './src/js/app.ts',
    output: {
        file: './public/assets/js/bundle.js',
        format: 'esm',
    },
    plugins: [
        alias(aliasSetting),
        esbuild({
            minify: process.env.NODE_ENV === 'production',
        }),
        resolve({
            browser: true,
        }),
        commonjs(),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],
};

export default deploy;
