import { createStore } from 'vuex'

export default createStore({
  state:{
    isLogin:false,
    userInfo:[],
    searchResult:[],
    searchKeyword:'',
    totalSum:0,
    totalPrice:0
},
mutations: {
    saveLogin(state,value){
        state.isLogin = value
    },
    saveUserInfo(state,value){
        state.userInfo = value
    },
    saveSearchResult(state,value){
        state.searchResult=value
    },
    saveSearchKeyword(state,value){
        state.searchKeyword = value
    },
    saveTotalSum(state,value){
        state.totalSum = value
    },
    saveTotalPrice(state,value){
        state.totalPrice = value
    }
},
actions: {
    saveTheLogin(context,value){
        context.commit('saveLogin',value)
    },
    saveTheUserInfo(context,value){
        context.commit('saveUserInfo',value)
    },
    saveTheSearchResult(context,value){
        context.commit('saveSearchResult',value)
    },
    saveTheSearchKeyword(context,value){
        context.commit('saveTheSearchKeyword',value)
    },
    saveTheTotalSum(context,value){
        context.commit('saveTheTotalSum',value)
    },
    saveTheTotalPrice(context,value){
        context.commit('saveTheTotalPrice',value)
    }
},
  modules: {
    
  }
})
