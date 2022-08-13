/*
 * @Author: your name
 * @Date: 2022-08-13 19:21:05
 * @LastEditTime: 2022-08-13 19:24:06
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
