<!--
 * @Author: your name
 * @Date: 2022-08-11 22:28:23
 * @LastEditTime: 2022-08-11 22:47:49
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\my\loggedIn\palaceGridNaviGation.vue
 *宫格导航模块
-->
<template>
  <div>
    <van-grid :column-num="2">
      <van-grid-item icon="photo-o">
        <i slot="icon" class="iconfont icon-shoucang"></i>
        <span slot="text" class="test">收藏</span>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <i slot="icon" class="iconfont icon-lishi"></i>
        <span slot="text" class="test">历史</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'palacePridNavigation'
}
</script>

<style lang="less" scoped>
.icon-shoucang {
  font-size: 23px;
  color: #eb5253;
}
.icon-lishi {
  font-size: 23px;
  color: #ff9d1d;
}
.test {
  display: inline-block;
  width: 33px;
  height: 14px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  color: #333333;
}
</style>
