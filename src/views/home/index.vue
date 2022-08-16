<!--
 * @Author: your name
 * @Date: 2022-08-09 19:18:57
 * @LastEditTime: 2022-08-16 15:25:31
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\home\index.vue
-->
<template>
  <div class="home-container">
    <van-nav-bar class="page-nav-bar" fixed>
      <van-button
        round
        type="info"
        slot="title"
        size="small"
        class="search-btn"
        icon="search"
        >搜索</van-button
      >
    </van-nav-bar>
    <van-tabs v-model="active" animated swipeable>
      <van-tab v-for="item in channels" :key="item.id" :title="item.name">
        <articleList :channel="item"></articleList>
      </van-tab>

      <div class="placeholder" slot="nav-right"></div>
      <div class="hamburger-btn" slot="nav-right">
        <i class="iconfont icon-gengduo" @click="isChannelEditShow = true"></i>
      </div>
    </van-tabs>
    <!-- 弹出层 -->
    <van-popup
      v-model="isChannelEditShow"
      closeable
      position="bottom"
      :style="{ height: '100%' }"
      close-icon-position="top-left"
    >
      <channelEdit
        :myChannels="channels"
        :active="active"
        @addChannles="addChannles"
        @updateActive="updateActive"
        @removeActive="removeActive"
      ></channelEdit>
    </van-popup>
  </div>
</template>

<script>
import channelEdit from '@/views/home/components/channelEdit.vue'
import articleList from '@/views/home/components/articleList.vue'
import { getItem, setItem } from '@/utils/storage'
import { getUserChannels } from '@/api/user'
import { addUserChannel, deleteUserChannel } from '@/api/article'
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    articleList,
    channelEdit
  },
  data() {
    return {
      active: 0,
      channels: [],
      isChannelEditShow: false
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async loadChannels() {
      if (!this.user) {
        if (getItem('TOUTIAO_CHANNELS')) {
          this.channels = getItem('TOUTIAO_CHANNELS')
        } else {
          try {
            const { data } = await getUserChannels()
            this.channels = data.data.channels
          } catch {
            this.$toast('获取频道列表数据失败')
          }
        }
      } else {
        try {
          const { data } = await getUserChannels()
          this.channels = data.data.channels
        } catch {
          this.$toast('获取频道列表数据失败')
        }
      }
    },
    showPopup() {
      this.show = true
    },
    async addChannles(val) {
      this.channels.push(val)
      if (!this.user) {
        console.log(1)
        setItem('TOUTIAO_CHANNELS', this.channels)
      } else {
        try {
          const res = await addUserChannel(val)
          console.log(res)
        } catch (err) {
          console.log(err)
        }
      }
    },
    /**
     * 切换高亮
     */
    updateActive(index) {
      this.active = index
      this.isChannelEditShow = false
    },
    /**
     * 删除
     */
    removeActive(index, id) {
      if (index <= this.active) {
        this.active--
      }
      this.channels.splice(index, 1)
      if (!this.user) {
        console.log(this.channels)

        return setItem('TOUTIAO_CHANNELS', this.channels)
      }
      deleteUserChannel(id)
    }
  },
  mounted() {
    this.loadChannels()
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-bottom: 49px;
}
:deep(.van-nav-bar__title) {
  max-width: none;
}
.search-btn {
  width: 278px;
  height: 32px;
  font-size: 14px;
  color: #fff;
  background-color: #5babfb;
}
.van-button__icon {
  font-size: 16px;
  color: #fff;
}
:deep(.van-tabs__nav) {
  padding: 0;
}
:deep(.van-tab) {
  width: 100px;
  border-left: 1px solid #edeff3;
  color: #777;
}
:deep(.van-tab:first-child) {
  border: none;
}
:deep(.van-tabs__line) {
  bottom: 5px;
  width: 16px;
  height: 3px;
  background-color: #3296fa;
  border-radius: 2px;
}
:deep(.van-tabs__wrap) {
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  z-index: 2;
}
.hamburger-btn {
  position: fixed;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 41px;
  opacity: 0.9;
  .icon-gengduo {
    font-size: 17px;
    color: #333;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 28px;
    background: url('@/assets/gradient-gray-line.png');
    background-size: contain;
  }
}
.placeholder {
  flex-shrink: 0;
  width: 33px;
  height: 41px;
}
</style>
