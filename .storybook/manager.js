import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: 'light',
  brandTitle: 'Vuecado UI',
  
  colorSecondary: '#012d15',
  barSelectedColor: '#012d15',
  textColor: '#012d15',
});

addons.setConfig({
  theme,
});
