<template>
  <button>
    <my-icon :loadingIcon="loadingIcon" :isLoading="isLoading"></my-icon>
    <slot>Click</slot>
    <slot name="myBtn"></slot>
  </button>
</template>

<script>
import MyIcon from './MyIcon.vue';
export default {
  name: 'MyButton',
  components: {
    MyIcon,
  },
  props: ['isLoading', 'loadingIcon'],
};
</script>

<style scoped></style>
