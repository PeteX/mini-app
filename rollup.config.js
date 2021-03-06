import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'node_modules/lit-element/lit-element.js',
  output: {
    file: 'public/static/lit-element/2.3.1/lit-element-02.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    resolve(),
    terser()
  ]
};
