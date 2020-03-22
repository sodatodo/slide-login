import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';
const extensions = ['.ts', '.tsx', '.css'];

const config = {
  input: 'src',
  output: [
    {
      dir: 'dist',
      format: 'umd',
      sourcemap: true,
      name: 'SlideLogin',
      globals: {
        'react': 'React',
        'prop-types': 'PropTypes',
        'react-dom': 'ReactDOM',
        'lodash': "lodash"
      },
    }
  ],
  plugins: [
    postcss({
      extract: false,
      modules: true,
    }),
    typescript(),
    commonjs(),
    babel({
      extensions,
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions
    })
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
}

export default config;
