import { configure } from '@storybook/react';
require('babel-plugin-require-context-hook/register')();
/* instabul ignore next */
configure(require.context('../src', true, /\.stories\.js$/), module);
