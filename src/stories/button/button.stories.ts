import { Meta } from '@storybook/vue3'
import VcButton from '../../components/button/vc-button.vue'
import { templateSourceCode } from '../utilities/template-source'
import { singleSource } from './source-code'

export default {
  title: 'Button',
  component: VcButton,
  argTypes: {
    label: { control: { type: 'text', required: false, default: 'Label' } },
  },
} as Meta;

export const Default = (args: any, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VcButton },
  setup() {
    return {
      args
    }
  },
  template: `
  <div>
    <VcButton v-bind="args" />
  </div>
  `
});

Default.args = {
  label: 'Label'
};


Default.parameters = {
  docs: { source: { code: templateSourceCode(singleSource, Default.args) } },
};
