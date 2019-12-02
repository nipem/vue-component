import Swiper from './Swiper.vue'
import Slide from './Slide.vue'

export default {
  install (Vue) {
    Vue.component('swiper', Swiper)
    Vue.component('slide', Slide)
  }
}

export { Swiper, Slide }
