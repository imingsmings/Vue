<template>
  <div>
    <ul>
      <li v-for="(value, key) in detail" :key="key">{{ key }} {{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      detail: {
        name: 'wxm',
        age: 18,
        score: 99,
      },
    };
  },
};
</script>

<style scoped>
div ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
