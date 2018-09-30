import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import money from 'v-money';

Vue.use('VeeValidate');
Vue.use(money, {precision: 0, prefix: '$'})
new Vue({
  el: '#app',
  render: h => h(App)
})