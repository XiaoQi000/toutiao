<!--
 * @Author: your name
 * @Date: 2022-08-09 18:47:09
 * @LastEditTime: 2022-08-12 09:00:51
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\layout\index.vue
-->
<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <van-tabbar route>
      <van-tabbar-item :to="{ name: 'home' }">
        <i slot="icon" class="iconfont icon-shouye"></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item :to="{ name: 'qa' }">
        <i slot="icon" class="iconfont icon-wenda"></i>
        <span>问答</span>
      </van-tabbar-item>
      <van-tabbar-item :to="{ name: 'video' }">
        <i slot="icon" class="iconfont icon-shipin"></i>
        <span>视频</span>
      </van-tabbar-item>
      <van-tabbar-item :to="{ name: 'my' }">
        <i slot="icon" class="iconfont icon-wode"></i>
        <span>{{ user ? '我的' : '未登录' }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LayoutIndex',
  data() {
    return {}
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
.van-tabbar--fixed {
  height: 49px;
  color: #707070;
  font-size: 10px;
}
.iconfont {
  font-size: 20px;
}
</style>
