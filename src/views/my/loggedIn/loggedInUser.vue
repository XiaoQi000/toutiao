<!--
 * @Author: your name
 * @Date: 2022-08-11 20:16:08
 * @LastEditTime: 2022-08-12 09:30:15
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\my\loggedIn\loggedInUser.vue
 *已登录 用户信息页面
-->
<template>
  <div>
    <div class="base">
      <div class="left">
        <van-image width="66" height="66" fit="cover" round :src="user.photo" />
        <span>{{ user.name }}</span>
      </div>
      <div class="right">
        <van-button type="default" size="mini" round>编辑资料</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loggedInuser',
  props: ['user']
}
</script>

<style lang="less" scoped>
.base {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 115px;
}
.left {
  display: flex;
  align-items: center;
  span {
    margin-left: 11px;
    width: 77px;
    height: 15px;
    font-size: 15px;
    color: #fff;
  }
}
.right {
  .van-button {
    width: 58px;
    height: 17px;
    background-color: #fff;
    font-size: 10px;
    color: #666;
  }
}
</style>
