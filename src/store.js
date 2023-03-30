import {
    createStore
  } from 'vuex'
  
  import persistedstate from 'vuex-persistedstate';//state값 유지(새로고침 해도 계속 로그인 상태 유지를 위함))
  
  const store = createStore({
    state() {
      return {
        user: {}
      }
    },
    mutations: {
      user(state, data) {
        state.user = data;
      }
    },
    plugins: [
      persistedstate({
        paths: ['user'] //새로고침해도 계속 로그인 상태
      })
    ]
  });
  
  export default store;