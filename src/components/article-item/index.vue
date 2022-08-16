<!--
 * @Author: your name
 * @Date: 2022-08-15 18:45:04
 * @LastEditTime: 2022-08-15 19:16:26
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\components\article-item\index.vue
 *数据展示
-->
<template>
  <div>
    <van-cell class="article-item">
      <div slot="title" class="title">{{ article.title }}</div>
      <div slot="label">
        <div class="cover-wrap" v-if="article.cover.type === 3">
          <div
            class="cover-item"
            v-for="(img, index) in article.cover.images"
            :key="index"
          >
            <van-image :src="img" />
          </div>
        </div>
      </div>
      <div slot="label" class="label-text">
        <span>置顶</span>
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }}评论</span>
        <span>{{ article.pubdate | relativeTime }}</span>
      </div>
      <van-image
        :src="article.cover.images[0]"
        v-if="article.cover.type === 1"
        slot="default"
      />
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      typeof: Object,
      requireed: true
    }
  }
}
</script>

<style lang="less" scoped>
.article-item {
  border-bottom: 1px solid #edeff3;
}
.cover-wrap {
  display: flex;
  padding: 15px 0;
  .van-image {
    width: 116px;
    height: 73px;
  }
}
.cover-item:nth-child(2) {
  margin: 0 2px;
}
.van-cell__value {
  flex: unset;
  width: 116px;
  height: 76px;
  padding: 0 0 0 10px;
  .van-image {
    width: 100%;
    height: 100%;
  }
}
.van-cell__title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 16px;
    color: #3a3a3a;
  }
}
.label-text {
  span {
    margin-right: 5px;
    font-size: 12px;
    color: #b4b4b4;
    &:first-child {
      color: #e22829;
    }
  }
}
.van-cell__label {
  padding: 0;
}
</style>
