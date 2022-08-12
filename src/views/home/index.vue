<!--
 * @Author: your name
 * @Date: 2022-08-09 19:18:57
 * @LastEditTime: 2022-08-12 10:13:30
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\home\index.vue
-->
<template>
  <div>
    <van-nav-bar class="page-nav-bar">
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
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar__title {
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
/deep/.van-tabs__nav {
  padding: 0;
}
/deep/.van-tab {
  width: 100px;
  border-left: 1px solid #edeff3;
  color: #777;
}
/deep/.van-tab:first-child {
  border: none;
}
/deep/.van-tabs__line {
  bottom: 5px;
  width: 16px;
  height: 3px;
  background-color: #3296fa;
  border-radius: 2px;
}
</style>
