// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // baseData: []
  },
  mutations: {
    // getData (state, res) {
    //   state.baseData = res;
    // }
  },
  actions: {
    // getData (context) {
    //   $.ajax({
    //     url: 'http://localhost:3001/agents',
    //     method: 'get',
    //     data: '',
    //     success: function (res) {
    //       console.log('success:', res);
    //       context.commit('getData', res);
    //     },
    //     error: function (err) {
    //       console.log(err);
    //     }
    //   });
    // }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})