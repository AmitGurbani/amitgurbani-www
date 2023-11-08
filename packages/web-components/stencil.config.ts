import { Config } from '@stencil/core';
import tailwind, { tailwindHMR, setPluginConfigurationDefaults, TailwindPluginConfig } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';
import tailwindConf from './tailwind.config';
import autoprefixer from 'autoprefixer';

setPluginConfigurationDefaults({
  tailwindConf: tailwindConf as TailwindPluginConfig,
  tailwindCssPath: './src/styles/tailwind.css',
  postcss: {
    plugins: [tailwindcss(), autoprefixer()],
  },
});

export const config: Config = {
  namespace: 'web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [tailwind(), tailwindHMR()],
  testing: {
    browserHeadless: 'new',
  },
};
