import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vconsole from 'vconsole/dist/vconsole.min'

Vue.config.productionTip = false;
let vConsole = new Vconsole();
document.addEventListener('deviceready',function(){
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
},false)
