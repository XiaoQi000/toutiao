/*
 * @Author: your name
 * @Date: 2022-08-16 16:38:46
 * @LastEditTime: 2022-08-16 16:40:11
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\api\search.js
 */
import request from '@/utils/request'

export const getSearchSuggestion = q => {
  return request({
    method: 'GET',
    url: '/v1_0/suggestion',
    params: {
      q
    }
  })
}
