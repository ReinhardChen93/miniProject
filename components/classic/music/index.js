import {classicBeh} from '../classic-beh.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBeh],
  // 多继承
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:'images/player@waittion.png',
    playSrc:'images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
