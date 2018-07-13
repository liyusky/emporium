<template>
  <!-- s  -->
  <section class="city-select">
    <div class="select-title">
<<<<<<< HEAD
      <i></i>
      <div class="title-name"></div>
      <i></i>
    </div>
    <nav class="select-nav">
=======
      <div>取消</div>
      <h3>选择地址</h3>
      <div @click="confrim">确认</div>
    </div>
    <nav class="select-nav">
      <div class="nav-area">
        <ul class="area-list">
          <li class="list-item" :class="{active: province == item}" v-for="(item, index) in provinceList" :key="index" @click="selectProvince(item, index)">{{item}}</li>
        </ul>
      </div>
      <div class="nav-area">
        <ul class="area-list">
          <li class="list-item" :class="{active: city == item}" v-for="(item, index) in cityList" :key="index" @click="selectCity(item)">{{item}}</li>
        </ul>
      </div>
      <div class="nav-area">
        <ul class="area-list">
          <li class="list-item" :class="{active: area == item}" v-for="(item, index) in areaList" :key="index" @click="selectArea(item)">{{item}}</li>
        </ul>
      </div>
>>>>>>> 93fb79476048c9c279a793d45fed64417f6c03cf
    </nav>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'CitySelect',
  props: ['provinceList', 'cities'],
  data () {
    return {
      province: null,
      city: null,
      area: null,
      cityList: null,
      areaList: null
    }
  },
  methods: {
    selectProvince (item) {
      this.province = item
      let cityList = []
      console.log(this.cities)
      for (const key in this.cities[item]) {
        cityList.push(key)
      }
      this.cityList = cityList
      this.areaList = null
      this.city = null
      this.area = null
    },
    selectCity (item) {
      this.city = item
      this.area = null
      this.areaList = this.cities[this.province][item]
    },
    selectArea (item) {
      this.area = item
    },
    confrim () {
      if (this.area || this.area === this.cities[this.province][this.city]) {
        this.$emit('SELECT_AREA_EVENT', [this.province, this.city, this.area].join(' '))
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./city-select.scss";
</style>
