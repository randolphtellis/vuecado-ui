import { Parameters } from '@storybook/vue3';
import { themes } from '@storybook/theming';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  previewTabs: {
    docs: {
      hidden: false,
      theme: themes.dark,
    }
  },
};
