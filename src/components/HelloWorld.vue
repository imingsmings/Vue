<template>
  <a-select style="width: 120px" @change="handleChange" :value="model.areaId">
    <a-select-option
      v-for="item in areaList"
      :key="item.id"
      :value="item.areaId"
      >{{ item.mapName }}</a-select-option
    >
  </a-select>
</template>

<script>
export default {
  name: 'HelloWord',
  data() {
    return {
      areaList: [],
      mapInfo: null,
      model: {
        areaId: '',
      },
    };
  },
  created() {
    this.areaList = [
      { areaId: '1', mapName: '北京' },
      { areaId: '2', mapName: '陕西' },
      { areaId: '3', mapName: '西安' },
    ];
    this.mapInfo = this.areaList[0];
    this.model.areaId = this.mapInfo.areaId;
    // sessionStorage.setItem('mapInfo', JSON.stringify(this.mapInfo));
  },
  mounted() {
    const mapInfo = JSON.parse(sessionStorage.getItem('mapInfo'));
    if (mapInfo) {
      this.model.areaId = mapInfo.areaId;
    }
  },
  methods: {
    handleChange(value) {
      this.model.areaId = value;
      const mapInfo = this.areaList.find((item) => item.areaId === value);
      sessionStorage.setItem('mapInfo', JSON.stringify(mapInfo));
      location.reload();
    },
  },
};
</script>

<style scoped></style>
