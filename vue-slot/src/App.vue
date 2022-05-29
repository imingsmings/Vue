<template>
  <my-button />
  <my-button> <span>Click1</span> </my-button>
  <my-button> Click2</my-button>
  <my-button> <my-icon></my-icon></my-button>
  <my-button
    @click="changeStatus"
    :disabled="isLoading"
    :loadingIcon="true"
    :is-loading="isLoading"
  >
    <!-- {{ isLoading ? 'Loading' : 'Click' }} -->
    <!-- <template v-slot:myBtn>
      {{ isLoading ? 'Loading' : 'Click' }}
    </template> -->
    <template #myBtn>
      {{ isLoading ? 'Loading1' : 'Click1' }}
    </template>
    <template #default>
      {{ isLoading ? 'Loading2' : 'Click2' }}
    </template>
  </my-button>
</template>

<script>
import MyButton from './components/MyButton.vue';
import MyIcon from './components/MyIcon.vue';

export default {
  name: 'App',
  components: {
    MyButton,
    MyIcon,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    changeStatus() {
      this.isLoading = true;

      this.timer = setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
  },
  unmounted() {
    clearTimeout(this.timer);
    this.timer = null;
  },
};
</script>

<style></style>
