<!--
 * @Author: your name
 * @Date: 2022-08-15 19:30:04
 * @LastEditTime: 2022-08-16 15:22:07
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\home\components\channelEdit.vue
 *弹出层模块
-->
<template>
  <div class="channel-edit">
    <van-cell title="我的頻道">
      <van-button
        plain
        type="danger"
        round
        size="mini"
        @click="isEditShow = !isEditShow"
        >{{ isEditShow ? '完成' : '编辑' }}</van-button
      >
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        v-for="(item, index) in myChannels"
        :key="index"
        @click="onMyChannelClick(index, item)"
      >
        <van-icon
          name="close"
          v-show="isEditShow && !fixedChannels.includes(item.id)"
        />
        <span class="text" :class="{ active: index === active }">{{
          item.name
        }}</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="推荐频道" />

    <van-grid :gutter="10">
      <van-grid-item
        v-for="(item, index) in recommendChannels"
        :key="index"
        :text="item.name"
        icon="plus"
        class="recommend-grid"
        @click="onAddChannles(item)"
      />
    </van-grid>
  </div>
</template>

<script>
import { getAllChannels } from '@/api/article'

export default {
  name: 'channelEdit',
  props: {
    myChannels: {
      type: Array,
      required: true
    },
    active: {
      typeof: Number,
      required: true
    }
  },
  data() {
    return {
      allChannels: [],
      isEditShow: false,
      fixedChannels: [0]
    }
  },
  methods: {
    async loadAllChannels() {
      try {
        const { data } = await getAllChannels()
        console.log(data.data.channels)
        this.allChannels = data.data.channels
      } catch (err) {
        console.log(err)
      }
    },
    /**
     * 添加频道
     */
    onAddChannles(val) {
      this.$emit('addChannles', val)
    },
    /**
     * 点击切换
     */
    onMyChannelClick(index, item) {
      if (this.isEditShow) {
        if (this.fixedChannels.includes(index)) return
        this.$emit('removeActive', index, item.id)
      } else {
        this.$emit('updateActive', index)
      }
    }
  },
  mounted() {
    this.loadAllChannels()
  },
  computed: {
    recommendChannels() {
      return this.allChannels.filter(channel => {
        const mychannel = this.myChannels.find(myChannel => {
          return myChannel.id === channel.id
        })
        return !mychannel
      })
    }
  }
}
</script>

<style lang="less" scoped>
.channel-edit {
  padding-top: 44px;
  .van-button--danger {
    width: 62px;
    height: 35px;
  }
  :deep(.van-grid-item__content) {
    background-color: #f4f5f6;
    white-space: nowrap;
    span {
      margin-top: 0;
    }
    .van-icon-close {
      position: absolute;
      top: -6px;
      right: -6px;
      font-size: 12px;
    }
  }
  :deep(.recommend-grid) {
    .van-grid-item__content {
      flex-direction: row;
    }
    .van-icon-plus {
      margin-right: 4px;
      font-size: 12px;
      color: #222;
    }
    .van-grid-item__text {
      font-size: 14px;
      color: #222;
    }
  }
  .text {
    font-size: 14px;
    color: #222;
  }
  .van-grid-item {
    width: 81px;
  }
  .active {
    color: red;
  }
}
</style>
