<!--
 * @Author: your name
 * @Date: 2022-08-11 20:51:37
 * @LastEditTime: 2022-08-12 09:32:28
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\my\loggedIn\loginInformation.vue
 *点赞 头条 信息模块
-->
<template>
  <div>
    <div class="information">
      <div class="item">
        <span class="count">{{ user.art_count }}</span>
        <span class="text">头条</span>
      </div>
      <div class="item">
        <span class="count">{{ user.follow_count }}</span>
        <span class="text">关注</span>
      </div>
      <div class="item">
        <span class="count">{{ user.fans_count }}</span>
        <span class="text">粉丝</span>
      </div>
      <div class="item">
        <span class="count">{{ user.like_count }}</span>
        <span class="text">获赞</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginInformation',
  props: ['user']
}
</script>

<style lang="less" scoped>
.information {
  height: 85px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .count {
      font-size: 18px;
    }
    .text {
      margin-top: 9px;
      font-size: 12px;
    }
  }
}
</style>
