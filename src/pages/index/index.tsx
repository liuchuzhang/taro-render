import Taro, { Component, Config, useState, useEffect, useReducer, useCallback } from '@tarojs/taro'
import dialog from '../../components/Dialog'
import './index.scss'

export default function Index () {
  const handleClick = () => {
    dialog({
      title: '标题',
      content: '内容内容'
    })
  }

  return (
    <div>
      <button onClick={handleClick}>message</button>
    </div>
  )
}
