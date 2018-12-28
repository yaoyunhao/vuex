 const state = {
     num: 0
 }
 const mutations = {
     changeNum(state, { payload }) {
         state.num = payload == "add" ? state.num + 1 : state.num - 1;
     }
 }
 const getters = {
     date() {
         return 123 + state.num
     }
 }
 const actions = {
     changeNumAsync({ commit }, actions) {
         commit('changeNum', actions)
     }
 }
 export default {
     namespaced: true,
     state,
     getters,
     mutations,
     actions
 }