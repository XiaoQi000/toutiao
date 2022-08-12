<!--
 * @Author: your name
 * @Date: 2022-08-09 19:21:31
 * @LastEditTime: 2022-08-11 23:01:35
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\my\index.vue
-->
<template>
  <div>
    <loggedInAll v-if="user"></loggedInAll>
    <notloggedin v-else></notloggedin>
    <!-- 宫格道航  -->
    <palaceGridNaviGation></palaceGridNaviGation>
    <!-- 单元格导航 -->
    <cellNavigation></cellNavigation>
  </div>
</template>

<script>
import notloggedin from '@/views/my/notLoggedin'
import loggedInAll from '@/views/my/loggedIn/loggedInAll.vue'
import palaceGridNaviGation from '@/views/my/loggedIn/palaceGridNavigation'
import cellNavigation from '@/views/my/loggedIn/cellNavigation.vue'
import { mapState } from 'vuex'

export default {
  name: 'MyIndex',
  components: {
    notloggedin,
    loggedInAll,
    palaceGridNaviGation,
    cellNavigation
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>
