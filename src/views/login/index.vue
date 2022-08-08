<template>
  <div>
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userRules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="验证码"
        placeholder="请输入验证码"
        :rules="userRules.code"
        type="number"
        maxlength="6"
        ><i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-count-down
            :time="1000 * 60"
            format="ss s"
            v-if="isCountDownShow"
            @finish="isCountDownShow = false"
          />
          <van-button
            native-type="button"
            round
            size="small"
            type="primary"
            v-else
            @click="onSendSmsCode"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div>
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user.js'

export default {
  name: 'loginIndex',
  data() {
    return {
      user: {
        mobile: '',
        code: ''
      },
      userRules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          },
          {
            pattern: /^1[3|4|5|6|7|8|9]\d{9}$/,
            message: '手机号格式不正确'
          }
        ],
        code: [
          {
            required: true,
            message: '手机号不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式不正确'
          }
        ]
      },
      isCountDownShow: false
    }
  },
  methods: {
    async onSubmit() {
      // console.log(this.user)
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await login(this.user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log('登录失败', err.response.status)
        if (err.response.status === 400) {
          this.$toast.fail('手机号和验证码错误')
        } else {
          this.$toast.fail('登录失败')
        }
      }
    },
    async onSendSmsCode() {
      console.log(this.$refs.loginForm)
      try {
        await this.$refs.loginForm.validate('mobile')
      } catch (err) {
        return console.log('验证失败', err)
      }
      this.isCountDownShow = true
      try {
        await getSmsCode(this.user.mobile)
        this.$toast('发送成功')
      } catch (err) {
        // console.log('发送失败', err)
        if (err.response.status === 429) {
          return this.$toast('发送频率过于频繁')
        } else {
          return this.$toast('发送验证码失败')
        }
      }
    }
  }
}
</script>
<style scoped>
.iconfont {
  font-size: 19px;
}
.van-field__control {
  color: #c0c0c0;
}
.van-button--round {
  width: 76px;
  height: 23px;
  background-color: #ededed;
  color: #666;
  font-size: 11px;
  border: none;
}
.van-button--block {
  width: 347px;
  height: 44px;
  margin-top: 27px;
  margin-left: 16px;
  border: none;
  background-color: #6db4fb;
  border-radius: 5px;
}
.s {
  display: inline-block;
  width: 1px;
  height: 23px;
  background-color: #eeeeee;
}
</style>
