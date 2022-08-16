<!--
 * @Author: your name
 * @Date: 2022-08-15 15:39:54
 * @LastEditTime: 2022-08-15 15:49:24
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\search\components\searchHistory.vue
 *搜索历史
-->
<template>
  <div>
    <van-cell-group>
      <van-cell title="搜索历史" value="内容">
        <span>全部删除</span>
        <span>完成</span>
        <van-icon name="delete" />
      </van-cell>
      <van-cell title="hello">
        <van-icon name="close" />
      </van-cell>
      <van-cell title="hello">
        <van-icon name="close" />
      </van-cell>
      <van-cell title="hello">
        <van-icon name="close" />
      </van-cell>
      <van-cell title="hello">
        <van-icon name="close" />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'searchHistory'
}
</script>

<style lang="less" scoped></style>
