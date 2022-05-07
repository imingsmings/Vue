<template>
  <div class="tab">
    <span
      v-for="item in tabPans"
      :key="item.key"
      :class="['tab-item', { active: item.key === currentTab }]"
      @click="switchTab(item.key)"
    >
      {{ item.value }}</span
    >
  </div>
  <div class="component">
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './Home.vue';
import Table from './About.vue';
export default {
  name: 'Tab',
  data() {
    return {
      tabPans: [
        { key: 'Map', value: 'Map' },
        { key: 'Table', value: 'Table' },
      ],
      currentTab: 'Map',
    };
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab;
    },
  },
  computed: {
    currentComponent() {
      switch (this.currentTab) {
        case 'Map':
          return Home;
        case 'Table':
          return Table;
      }
    },
  },
};
</script>
<style scoped>
.tab .tab-item {
  display: inline-block;
  width: 50px;
  line-height: 30px;
}

.tab .tab-item.active {
  background: #1dffd8;
  color: #fff;
}
</style>
