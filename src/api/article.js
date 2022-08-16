/*
 * @Author: your name
 * @Date: 2022-08-13 19:21:05
 * @LastEditTime: 2022-08-16 15:01:30
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\api\article.js
 * 获取文章接口模块
 */
import request from '@/utils/request'
export const getArticles = params => {
  return request({
    url: '/v1_0/articles',
    method: 'get',
    params
  })
}
/**
 *
 * @returns 获取所有频道 信息
 */
export const getAllChannels = () => {
  return request({
    url: '/v1_0/channels',
    method: 'get'
  })
}

/**
 * 添加持久化
 */
export const addUserChannel = channel => {
  return request({
    url: '/v1_0/user/channels',
    method: 'PATCH',
    data: {
      channels: [channel]
    }
  })
}
/**
 * 删除持久化
 */

export const deleteUserChannel = target => {
  return request({
    url: `/v1_0/user/channels/${target}`,
    method: 'DELETE'
  })
}
