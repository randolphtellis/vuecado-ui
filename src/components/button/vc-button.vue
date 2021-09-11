<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export interface ButtonPropsType {
  label?: string;
}

export default defineComponent({
  name: 'vc-button',

  props: {
    label: {
      type: String,
      default: ''
    }
  },
  setup(props: ButtonPropsType) {
    
    return {
      props
    }
  }
})
</script>

<template>
  <button>{{ label }}</button>
</template>

<style lang="scss">
</style>

