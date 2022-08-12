<!--
 * @Author: your name
 * @Date: 2022-08-11 20:14:25
 * @LastEditTime: 2022-08-12 09:33:07
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\my\loggedIn\loggedInAll.vue
 *已登录 总页
-->
<template>
  <div>
    <div class="header">
      <!-- 用户信息-->
      <loggedInUser :user="userInfo"></loggedInUser>
      <!-- 头条 获赞 -->
      <loginInformation :user="userInfo"></loginInformation>
    </div>
  </div>
</template>

<script>
import loggedInUser from '@/views/my/loggedIn/loggedInUser.vue'
import loginInformation from '@/views/my/loggedIn/loginInformation.vue'
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'loggedInAll',
  components: {
    loggedInUser,
    loginInformation
  },
  data() {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    if (this.user) {
      this.loadUser()
    }
  },
  methods: {
    async loadUser() {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
      } catch (err) {
        this.$toast('请求信息失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 200px;
  background: url('~@/assets/banner.png');
}
</style>
