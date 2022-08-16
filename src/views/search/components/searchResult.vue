<!--
 * @Author: your name
 * @Date: 2022-08-15 15:42:16
 * @LastEditTime: 2022-08-15 16:58:31
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\search\components\searchResult.vue
 *搜索结果
-->
<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'searchResult',
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped></style>
