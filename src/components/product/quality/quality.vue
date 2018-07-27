<template>
  <!-- s 质检 -->
  <section class="quality">
    <h3 class="quality-title">本机质检</h3>
    <div class="quality-detail">
      <div class="detail-panel">
        <div class="panel-inspector">
          <div class="inspector-information">
            <div class="information-portrait">
              <img src="../../../assets/images/qulity.png">
            </div>
            <div class="information-resume">
              <p>连俊杰</p>
              <p>高级质检师</p>
            </div>
          </div>
          <div class="inspector-seal">
            <!-- <img src="https://api.vtrois.com/image/129x129/bbbfc0"> -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-hege"></use>
            </svg>
          </div>
        </div>
        <div class="panel-message">
          <h4 class="message-title">质检信息</h4>
          <ul class="message-list">
            <li class="list-item" v-for="(item, index) in quality.TestInfoList" :key="index">
              <p>{{item.Title}}</p>
              <p>{{item.Value}}</p>
            </li>
          </ul>
        </div>
        <div class="panel-hardware">
          <h4 class="hardware-title">功能检测</h4>
          <ul class="hardware-list">
            <li class="list-item" v-for="(item, index) in quality.OtherInfoList" :key="index">
              <p>{{item.Title}}</p>
              <i class="iconfont icon-dadaobiaozhun" :class="{'iactive': item.Value == 1, 'iactiveno': item.Value != 1}"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="quality-process">
      <h4 class="process-title">质检流程</h4>
      <p class="process-tip">我们每一台机器，都经过严格的检验流程，才能上架，所以请用户放心购买我们的每一台机器！</p>
      <ul class="process-flow">
        <li class="flow-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-waiguanjiancepingji"></use>
          </svg>
          <div class="item-tip">
            <div class="tip-sequence">1</div>
            <p>外观检测评级</p>
          </div>
        </li>
        <li class="flow-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-neibugongnengjiance"></use>
          </svg>
          <div class="item-tip">
            <div class="tip-sequence">2</div>
            <p>内部功能检测</p>
          </div>
        </li>
        <li class="flow-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhengjiqingjieshangjia"></use>
          </svg>
          <div class="item-tip">
            <div class="tip-sequence">3</div>
            <p>硬件功能检查</p>
          </div>
        </li>
        <li class="flow-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhengjiqingjieshangjia"></use>
          </svg>
          <div class="item-tip">
            <div class="tip-sequence">4</div>
            <p>整机清洁上架</p>
          </div>
        </li>
      </ul>
      <!-- <img class="process-video" src="https://api.vtrois.com/image/702x390/bbbfc0"> -->
      <!-- <video class="process-video" src="https://api.vtrois.com/image/702x390/bbbfc0"></video> -->
    </div>
  </section>
  <!-- e 质检 -->
</template>

<script>
export default {
  name: 'Quality',
  props: ['quality'],
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./quality.scss";
</style>
