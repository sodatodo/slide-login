import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';
const extensions = ['.ts', '.tsx'];

const config = {
  input: 'src',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    typescript(),
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
