import { createStore } from 'vuex'

export default createStore({
  state:{
    isLogin:false,
    userInfo:[]
},
mutations: {
    saveLogin(state,value){
        state.isLogin = value
    },
    saveUserInfo(state,value){
        state.userInfo = value
    }
},
actions: {
    saveTheLogin(context,value){
        context.commit('saveLogin',value)
    },
    saveTheUserInfo(state,value){
        context.commit('saveUserInfo',value)
    }
},
  modules: {
    
  }
})
