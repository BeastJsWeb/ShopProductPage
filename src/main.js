import { createApp } from 'vue'
import VueLazyLoad from 'vue3-lazyload'
import App from '@/App'
import router from '@/router'
import components from '@/components/UI'
import icons from '@/assets/icons'

const app = createApp(App)
components.forEach(component =>{
  app.component(component.name, component)
})
icons.forEach(component =>{
  app.component(component.name, component)
})

app
  .use(router)
  .use(VueLazyLoad)
  .mount('#app')
