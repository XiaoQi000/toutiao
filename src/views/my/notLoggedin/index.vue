<!--
 * @Author: your name
 * @Date: 2022-08-11 19:40:29
 * @LastEditTime: 2022-08-11 20:03:49
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\my\notloggedin\index.vue
-->
<template>
  <div>
    <div class="header">
      <div class="login-btn" @click="$router.push('/login')">
        <img src="@/assets/mobile.png" alt="" />
        <span>登录 / 注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loggedIn'
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: url('~@/assets/banner.png');
  img {
    width: 66px;
    height: 66px;
  }
  .login-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      width: 74px;
      height: 14px;
      margin-top: 8px;
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>
