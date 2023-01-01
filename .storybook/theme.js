// .storybook/theme.js
import { create } from '@storybook/theming';
import logoUrl from './gogol-ui.png';

export default create({
  base: 'light',
  brandTitle: 'Gogol UI',
  brandImage: logoUrl,
  brandTarget: '_self',
});