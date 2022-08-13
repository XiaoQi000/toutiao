<!--
 * @Author: your name
 * @Date: 2022-08-13 19:09:36
 * @LastEditTime: 2022-08-13 20:06:21
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\home\components\articleList.vue
-->
<template>
  <div class="artcile-list">
    <van-pull-refresh
      v-model="isRefreshLoading"
      :success-text="refreshSuccessText"
      @refresh="onRefresh"
      success-duration="1000"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
export default {
  name: 'articleList',
  props: {
    channel: {
      typeof: 'Objeck',
      requireed: true
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      timestamp: null,
      isRefreshLoading: false,
      refreshSuccessText: ''
    }
  },
  methods: {
    async onLoad() {
      // 异步更新数据
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now()
        })
        const { results } = data.data
        this.list.push(...results)
        this.loading = false
        if (results.length) {
          this.timestamp = data.data.pre_timestamp
        } else {
          this.finished = true
        }
      } catch (err) {
        this.finished = false
        this.error = true
      }
    },
    async onRefresh() {
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: Date.now()
        })
        const { results } = data.data
        console.log(results)
        this.list.unshift(...results)
        this.refreshSuccessText = `刷新成功，更新了${results.length}条数据`
        this.isRefreshLoading = false
      } catch (err) {
        this.isRefreshLoading = false
        this.$toast('刷新失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.artcile-list {
  padding-top: 90px;
  height: 79vh;
  overflow: auto;
}
</style>
