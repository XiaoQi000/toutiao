<!--
 * @Author: your name
 * @Date: 2022-08-15 14:58:48
 * @LastEditTime: 2022-08-15 17:07:42
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\search\index.vue
-->

<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        background="#3296fa"
      />
    </form>
    <!-- 搜索结果 -->
    <searchResult v-if="isResultShow"></searchResult>
    <searchSuggestion
      v-else-if="searchText"
      :searchText="searchText"
    ></searchSuggestion>
    <searchHistory v-else></searchHistory>
  </div>
</template>

<script>
import searchHistory from '@/views/search/components/searchHistory'
import searchResult from '@/views/search/components/searchResult.vue'
import searchSuggestion from '@/views/search/components/searchSuggestion.vue'
export default {
  name: 'SearchIndex',
  data() {
    return {
      isResultShow: false,
      searchText: ''
    }
  },
  components: {
    searchHistory,
    searchResult,
    searchSuggestion
  },
  methods: {
    onSearch() {
      this.isResultShow = true
    },
    onCancel() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.van-search__action {
  color: #fff;
}
</style>
