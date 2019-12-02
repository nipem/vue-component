import index, { Swiper, Slide } from '../../lib/index.js'
import { createLocalVue } from '@vue/test-utils'

describe('index', () => {
  it('should export a slide component', () => {
    expect(Slide).toBeDefined()
  })

  it('should export a Swiper component', () => {
    expect(Swiper).toBeDefined()
  })

  it('Installs the defauly export as a plugin', () => {
    const vue = createLocalVue()
    vue.use(index)
    expect(vue.options.components.swiper).toBeDefined()
    expect(vue.options.components.slide).toBeDefined()
  })
})
