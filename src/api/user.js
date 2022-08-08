/*
 * @Author: your name
 * @Date: 2022-08-08 15:01:28
 * @LastEditTime: 2022-08-08 19:38:08
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\utils\user.js
 */
import request from '@/utils/request'

export const login = data =>
  request({
    method: 'post',
    url: '/v1_0/authorizations',
    data
  })

export const getSmsCode = mobile => {
  return request({
    method: 'get',
    url: `/v1_0/sms/codes/${mobile}`
  })
}
