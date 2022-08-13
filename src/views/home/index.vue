<!--
 * @Author: your name
 * @Date: 2022-08-09 19:18:57
 * @LastEditTime: 2022-08-13 20:05:01
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\home\index.vue
-->
<template>
  <div class="home-container">
    <van-nav-bar class="page-nav-bar" fixed>
      <van-button
        round
        type="info"
        slot="title"
        size="small"
        class="search-btn"
        icon="search"
        >搜索</van-button
      >
    </van-nav-bar>
    <van-tabs v-model="active" animated swipeable>
      <van-tab v-for="item in channels" :key="item.id" :title="item.name">
        <articleList :channel="item"></articleList>
      </van-tab>

      <div class="placeholder" slot="nav-right"></div>
      <div class="hamburger-btn" slot="nav-right">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </van-tabs>
  </div>
</template>

<script>
import articleList from '@/views/home/components/articleList.vue'
import { getUserChannels } from '@/api/user'
export default {
  name: 'HomePage',
  components: {
    articleList
  },
  data() {
    return {
      active: 0,
      channels: []
    }
  },
  methods: {
    async loadChannels() {
      try {
        const { data } = await getUserChannels()
        this.channels = data.data.channels
      } catch {
        this.$toast('获取频道列表数据失败')
      }
    }
  },
  mounted() {
    this.loadChannels()
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-bottom: 49px;
}
:deep(.van-nav-bar__title) {
  max-width: none;
}
.search-btn {
  width: 278px;
  height: 32px;
  font-size: 14px;
  color: #fff;
  background-color: #5babfb;
}
.van-button__icon {
  font-size: 16px;
  color: #fff;
}
:deep(.van-tabs__nav) {
  padding: 0;
}
:deep(.van-tab) {
  width: 100px;
  border-left: 1px solid #edeff3;
  color: #777;
}
:deep(.van-tab:first-child) {
  border: none;
}
:deep(.van-tabs__line) {
  bottom: 5px;
  width: 16px;
  height: 3px;
  background-color: #3296fa;
  border-radius: 2px;
}
:deep(.van-tabs__wrap) {
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  z-index: 2;
}
.hamburger-btn {
  position: fixed;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 41px;
  opacity: 0.9;
  .icon-gengduo {
    font-size: 17px;
    color: #333;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 28px;
    background: url('@/assets/gradient-gray-line.png');
    background-size: contain;
  }
}
.placeholder {
  flex-shrink: 0;
  width: 33px;
  height: 41px;
}
</style>
