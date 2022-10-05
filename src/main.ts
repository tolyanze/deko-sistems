import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import { Datetime } from 'vue-datetime'
// import 'vue-datetime/dist/vue-datetime.css'

createApp(App)
  .use(store)
  // .use(Datetime)
  .mount('#app')
