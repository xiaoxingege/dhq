/*
 * 前端页面入口文件
 */


import initVue from 'utils/initVue'
import App from 'components/ydzxDetail'

/*
 * 实例化vue对象，渲染页面
 * @component  用于渲染的组件
 */
initVue({
  component: App
})
