/*
 * @Author: your name
 * @Date: 2022-08-08 15:01:28
 * @LastEditTime: 2022-08-13 19:00:52
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\utils\user.js
 */
import request from '@/utils/request'
// 用户登录
export const login = data =>
  request({
    method: 'post',
    url: '/v1_0/authorizations',
    data
  })
// 发送验证码
export const getSmsCode = mobile => {
  return request({
    method: 'get',
    url: `/v1_0/sms/codes/${mobile}`
  })
}

// 获取用户自己的信息
export const getUserInfo = () => {
  return request({
    method: 'get',
    url: 'v1_0/user'
  })
}

// 获取自己的推荐信息
export const getUserChannels = () => {
  return request({
    url: '/v1_0/user/channels',
    method: 'get'
  })
}
