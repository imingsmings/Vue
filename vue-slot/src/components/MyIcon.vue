<template>
  <!-- <span>Icon</span> -->
  <span v-if="isLoading && loadingIcon" class="fa fa-spinner fa-spin"></span>
</template>

<script>
export default {
  name: 'MyIcon',
  props: ['isLoading', 'loadingIcon'],
};
</script>

<style></style>
