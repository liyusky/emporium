<template>
	<section class="footer">
		<div class="footer-item" :class="{activeShow:urlRouter == '/' || urlRouter == '/home'}" @click="toHome">
			<i class=" item-icon iconfont icon-shouye1"></i>
			<p class="item_name" v-show="urlRouter == '/mine'">首页</p>
		</div>
		<div class="footer-item" :class="{activeShow:urlRouter == '/mine'}" @click="toMine">
			<i class="item-icon iconfont icon-wodedamaijihuo"></i>
			<p class="item_name" v-show="urlRouter == '/' || urlRouter == '/home'">我的</p>
		</div>
	</section>
</template>
<script>
	export default{
		data () {
			return{
        itemNameShow: false
			}
    },
    props:['urlRouter'],
    methods: {
      toMine(){
        this.$router.push({name:'mine'})
      },
      toHome(){
        this.$router.push({name:'home'})
      }
    }
	}
</script>
<style scoped="scoped" lang="scss">
@import './footer.scss';
</style>