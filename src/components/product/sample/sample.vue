<template>
  <!-- s 实拍 -->
  <section class="sample">
    <h3 class="sample-title">真机实拍</h3>
    <ul class="sample-photos">
      <li class="photos-item" v-for="(item, index) in banner" :key="index">
        <img :src="item.ArchiveUri">
        <!-- <img :src="https://api.vtrois.com/image/702x525/bbbfc0"> -->
      </li>
    </ul>
    <div class="sample-service">
      <h4 class="service-title">服务保障</h4>
      <ul class="service-project">
        <li class="project-group">
          <div class="group-item">
            <div class="item-name">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhuanyezhijianshirenzheng"></use>
              </svg>
              <p>专业质检师认证</p>
            </div>
            <p class="item-introduction">每台机器均经过质检工程师质检认证，质量有保障</p>
          </div>
          <div class="group-item">
            <div class="item-name">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tianwuliyoutuihuanhuo"></use>
              </svg>
              <p>7天无理由退换货</p>
            </div>
            <p class="item-introduction">7天无理由退换服务，快速高效</p>
          </div>
        </li>
        <li class="project-group">
          <div class="group-item">
            <div class="item-name">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tianzhibaofuwu"></use>
              </svg>
              <p>365天质保服务</p>
            </div>
            <p class="item-introduction">365天内任何非人为功能性质量问题，均提供免费专业保修</p>
          </div>
          <div class="group-item">
            <div class="item-name">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-quanchangshunfengbaoyou"></use>
              </svg>
              <p>全场顺丰包邮</p>
            </div>
            <p class="item-introduction">每天6点前下单当天发货，顺丰送达家门口</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="sample-contact">
      <div class="contact-tip">
        <div class="tip-message">
          <p>官方微信客服：jtds1256</p>
          <p>关注有惊喜！有任何问题欢迎随时勾搭~~~</p>
        </div>
        <button class="tip-copy-btn" @click="share">
          <div>分享</div>
        </button>
      </div>
    </div>
  </section>
  <!-- e 实拍 -->
</template>

<script>
export default {
  name: 'Sample',
  props: ['sample', 'link', 'banner'],
  data () {
    return {}
  },
  mounted () {
    console.log(this.banner)
  },
  methods: {
    share () {
      let jsonStr = {
        id: this.id,
        title: '分期手机等你拿',
        message: '高品手机分期拿，快来试试吧!',
        url: this.link,
        type: 2
      }
      // alert(JSON.stringify(jsonStr))
      try {
        if (typeof (appJsInterface) !== 'undefined') {
          appJsInterface.Share(JSON.stringify(jsonStr))
        } else {
          webkit.messageHandlers.popShareUI.postMessage(JSON.stringify(jsonStr))
        }
      } catch (error) {
        this.$emit('OPEN_SHARE_EVENT', '分享失败')
      }
    },
    closeModal () {
      this.dialogShow = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./sample.scss";
</style>
