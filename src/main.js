import Vue from 'vue'
import App from './App.vue'
import "./assets/scss/_reset.scss"
import "./assets/scss/_index.scss"
import "./assets/scss/_navbar.scss"

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')