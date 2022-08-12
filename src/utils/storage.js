/*
 * @Author: your name
 * @Date: 2022-08-09 16:32:52
 * @LastEditTime: 2022-08-09 16:54:48
 * @LastEditors: 小柒
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\src\utils\storage.js
 */

/**
 * 获取本地存储
 */
export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
/**
 * 增加本地存储
 */

export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
/**
 * 删除本地存储
 */
export const remove = key => {
  window.localStorage.removeItem(key)
}
