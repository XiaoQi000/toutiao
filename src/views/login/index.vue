<!--
 * @Author: your name
 * @Date: 2022-08-08 20:17:49
 * @LastEditTime: 2022-08-12 09:09:21
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\views\login\index.vue
-->
<template>
  <div>
    <van-nav-bar title="登录">
      <!-- 点击退回到之前页面
       -->
      <van-icon slot="left" name="cross" @click="$router.back()"></van-icon>
    </van-nav-bar>
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="密码"
        placeholder="请输入验证码"
        :rules="userFormRules.code"
        type="number"
        maxlength="6"
      >
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <!-- 利用了插槽技术 -->
        <template #button>
          <!-- 计时器 -->
          <van-count-down
            :time="1000 * 60"
            v-if="isCountDownShow"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            native-type="button"
            round
            size="small"
            type="primary"
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
// 引入请求
import { login, getSmsCode } from '@/api/user'
export default {
  name: 'loginIndex',
  data() {
    return {
      user: {
        code: '',
        mobile: ''
      },
      // 表单验证
      userFormRules: {
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
            message: '验证码不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式不正确  '
          }
        ]
      },
      // 控制计时器 和 发送验证码的显示与 隐藏
      isCountDownShow: false
    }
  },
  methods: {
    // 登录
    async onSubmit() {
      // 轻提示
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      // try 成功执行 catch 失败拦截
      try {
        // 发送请求
        const { data } = await login(this.user)
        // 把token 传给 vuex
        this.$store.commit('SET_USER', data.data)

        this.$toast.success('登录成功')
        this.$router.push('/my')
      } catch (err) {
        console.log('登录失败')
        if (err.response.status === 400) {
          return this.$toast.fail('手机号验证码错误')
        } else {
          return this.$toast.fail('登录失败')
        }
      }
    },
    // 发送 手机验证码 我是 master
    async onSendSmsCode() {
      try {
        // 进行单独的表单验证 vant提供的方法
        await this.$refs.loginForm.validate('mobile')
      } catch (err) {
        return console.log('验证失败', err)
      }
      // 发送请求
      try {
        await getSmsCode(this.user.mobile)
        this.$toast('发送成功')
      } catch (err) {
        // console.log(err)
        if (err.response.status === 429) {
          return this.$toast('发送过于频繁，请稍后')
        } else {
          return this.$toast('发送验证码失败')
        }
      }
      // 发送请求成功 计时器显示显示出来
      this.isCountDownShow = true
    }
  }
}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 19px;
}
.van-button--round {
  width: 76px;
  height: 23px;
  border: none;
  background-color: #ededed;
  font-size: 11;
}
.van-button--block {
  width: 347px;
  height: 44px;
  margin-top: 27px;
  margin-left: 16px;
  background-color: #6db4fb;
  border-radius: 5px;
}
.van-icon-cross {
  color: #fff !important;
}
</style>
