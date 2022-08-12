<!--
 * @Author: your name
 * @Date: 2022-08-11 22:47:15
 * @LastEditTime: 2022-08-12 09:16:06
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\my\loggedIn\cellNavigation.vue
 *单元格 导航模块
-->
<template>
  <div>
    <van-cell-group>
      <van-cell title="消息通知" is-link />
      <van-cell title="小智同学" is-link />
    </van-cell-group>
    <van-cell
      v-if="user"
      class="logout-cell"
      title="退出登录"
      center
      @click="onLogout"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'cellNavigation',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    onLogout() {
      this.$dialog
        .confirm({
          title: '确认退出登录？'
        })
        .then(() => {
          this.$store.commit('SET_USER', null)
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="less" scoped>
.van-cell-group {
  margin: 10px 0 5px;
}
.logout-cell {
  height: 50px;
  text-align: center;
  color: #eb5253;
  font-size: 15px;
}
</style>
