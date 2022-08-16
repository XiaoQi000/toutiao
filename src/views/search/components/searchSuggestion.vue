<!--
 * @Author: your name
 * @Date: 2022-08-15 15:41:28
 * @LastEditTime: 2022-08-16 17:07:10
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\search\components\searchSuggestion.vue
 *联想建议
-->
<template>
  <div class="search-container">
    <van-cell
      v-for="(item, index) in suggestions"
      :key="index"
      :title="item"
      icon="search"
    ></van-cell>
  </div>
</template>

<script>
import { getSearchSuggestion } from '@/api/search'
import { debounce } from 'lodash'
export default {
  name: 'searchSuggestion',
  props: {
    searchText: {
      typeof: String,
      requireed: true
    }
  },
  data() {
    return {
      suggestions: []
    }
  },
  watch: {
    searchText: {
      // 监视的处理函数
      handler: debounce(function (val) {
        this.loadSearchSuggestion(val)
      }, 1000),
      // 首次监视触发
      immediate: true
    }
  },
  methods: {
    async loadSearchSuggestion(q) {
      try {
        const { data } = await getSearchSuggestion(q)
        this.suggestions = data.data.options
      } catch {
        this.$toast('获取失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search-container {
  .van-search__action {
    color: #fff;
  }
}
</style>
