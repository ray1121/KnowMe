/**
 * 模块模式
 * 使用这种模式需要在index.js中导出一个state函数
 * 导出mutations and actions作为对象
*/
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

/**
 * 以下这种模式是传统模式
 * 即是导出一个返回一个Vuex实例的一个方法
*/
// import Vuex from 'vuex'

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       counter: 0
//     },
//     mutations: {
//       increment (state) {
//         state.counter++
//       }
//     }
//   })
// }

// export default createStore
