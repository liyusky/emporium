<template>
  <section id="index" class="index">
    <PullRefresh @LOAD_MORE_EVENT="loadMore" :parent="'index'" >
      <header class="index-header">
        <img src="../../../assets/images/header.png">
      </header>
      <section class="index-advertising" @click="chatQQ">
        <img src="../../../assets/images/advertising.png">
      </section>
      <ul class="index-brand">
        <li class="brand-classify" v-for="(group, index) in groups" :key="index">
          <div class="classify-title">
            <svg class="icon" id="icon" aria-hidden="true">
              <use xlink:href="#icon-dianzhuixiaotu"></use>
            </svg>
            <p class="title-text">{{group.Key}}</p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dianzhuixiaotu"></use>
            </svg>
          </div>
          <ul class="classify-shop-list">
            <li class="list-item" v-for="(phone, index) in group.PhoneList" :key="index" @click="gotoPage(phone.Id, phone.ProductName)">
              <div class="item-content">
                <div class="content-shop-picture">
                  <img :src="phone.Icon">
                </div>
                <p class="content-title">{{phone.Title}}</p>
                <div class="content-parameter">
                  <div class="parameter-item">{{phone.Memory}}</div>
                  <div class="parameter-item">{{phone.Degree == '100' ? '全' : phone.Degree + '成'}}新</div>
                </div>
                <div class="content-price">
                  <p><span>¥</span><span>{{phone.nowPrice}}</span></p>
                  <p>市场价{{phone.originalPrice}}</p>
                </div>
                <div class="content-economize">
                  <p>省</p>
                  <p>￥{{parseFloat(phone.originalPrice - phone.nowPrice).toFixed(2)}}</p>
                </div>
                <div class="content-badge" v-if="phone.IsTested">
                  <p>{{phone.Status == '2' ? '已售完' : '已检测'}}</p>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </PullRefresh>
    <div id="back" class="index-back" @click="backTop">
      <i class="iconfont icon-jiantou"></i>
    </div>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
</template>

<script>
import PullRefresh from '../../common/pull-refresh/pull-refresh.vue'
import ModalDialog from '../../common/alert-modal/modal-dialog/modal-dialog.vue'
import Http from '../../../class/http.class.js'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      page: 1,
      groups: null,
      Title: {
        text: ''
      },
      dialogShow: false
    }
  },
  components: {
    PullRefresh,
    // ModalHint,
    ModalDialog
  },
  created () {
    Http.send({
      url: 'mall',
      data: {
        Pageindex: this.page
      }
    }).success(data => {
      this.scroll()
      this.groups = data
    }).fail(data => {
      this.Title.text = data.message
      this.dialogShow = true
    })
  },
  methods: {
    gotoPage (id, title) {
      this.saveProductId(id)
      this.saveOrigin7('mall')
      this.$router.push({
        name: 'product',
        params: {
          id: id
        }
      })
    },
    backTop () {
      var animation = setInterval(() => {
        var offset = document.getElementById('index').scrollTop
        var speed = offset / 6
        document.getElementById('index').scrollTop -= speed
        if (document.getElementById('index').scrollTop <= 0) {
          clearInterval(animation)
        }
      }, 20)
    },
    scroll () {
      var bodyHeight = document.body.clientHeight
      document.getElementById('index').onscroll = function () {
        var scrollEnd = document.getElementById('index').scrollTop
        if (scrollEnd >= bodyHeight) {
          document.getElementById('back').style.display = 'block'
        } else {
          document.getElementById('back').style.display = 'none'
        }
      }
    },
    closeModal () {
      this.dialogShow = false
    },
    loadMore () {
      Http.send({
        url: 'mall',
        data: {
          Pageindex: ++this.page
        }
      }).success(data => {
        if (!data.length) {
          // this.Title.text = '没有更多数据了'
          // this.HintShow = true
          // setTimeout(() => {
          //   this.HintShow = false
          // }, 500)
          return false
        }
        this.groups = this.groups.concat(data)
      }).fail((data) => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    chatQQ () {
      try {
        webkit.messageHandlers.popQQ.postMessage(JSON.stringify('1436278338'))
      } catch (error) {
        window.location.href = 'mqqwpa://im/chat?chat_type=wpa&uin=1436278338&version=3&src_type=web&web_src=oicqzone.com'
      }
    },
    ...mapMutations(['saveProductId', 'saveOrigin7'])
  }
}
</script>

<style scoped lang="sass">
@import './mall.scss';
</style>
