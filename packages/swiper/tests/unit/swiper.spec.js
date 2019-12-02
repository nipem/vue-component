/* eslint-disable */

import {
  mount,
  shallowMount
} from '@vue/test-utils';
import {
  Swiper,
  Slide
} from '../../lib/index';

describe('Swiper component', () => {
  describe('Default mounting properties', () => {
    it('should mount successfully', () => {
      const wrapper = mount(Swiper);

      expect(wrapper.vm._isMounted).toBeTruthy();

      expect(wrapper).toMatchSnapshot();
    });

    it('should unmount successfully', () => {
      const wrapper = mount(Swiper);

      const SwiperInstance = wrapper.vm;
      SwiperInstance.$destroy();
      expect(SwiperInstance._isDestroyed).toBeTruthy();

      expect(wrapper).toMatchSnapshot();
    });

    it('should be able to autoplay by default', () => {
      const wrapper = mount(Swiper);

      expect(wrapper.vm.autoplay).toBeTruthy();

      expect(wrapper).toMatchSnapshot();
    });

    it('should be able to loop by default', () => {
      const wrapper = mount(Swiper);

      expect(wrapper.vm.loop).toBeTruthy();

      expect(wrapper).toMatchSnapshot();
    });

    it('should have 3 items when number of slides is 3', done => {
      const wrapper = mount(Swiper, {
        slots: {
          default: [Slide, Slide, Slide]
        }
      });

      expect(wrapper.vm.items.length).toBe(3);

      wrapper.vm.$nextTick(() => {
        expect(wrapper).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Events', () => {
    it('should activeIndex be 2 when emit next event twice', done => {
      const wrapper = shallowMount(Swiper, {
        slots: {
          default: [Slide, Slide, Slide]
        }
      });
      wrapper.vm.next();
      wrapper.vm.next();

      expect(wrapper.vm.activeIndex).toBe(2);

      wrapper.vm.$nextTick(() => {
        expect(wrapper).toMatchSnapshot();
        done();
      });
    });

    it('should activeIndex be 0 when emit next at the last slide', done => {
      const wrapper = shallowMount(Swiper, {
        slots: {
          default: [Slide, Slide, Slide]
        },
        propsData: {
          active: 2
        }
      });
      wrapper.vm.next();

      expect(wrapper.vm.activeIndex).toBe(0);

      wrapper.vm.$nextTick(() => {
        expect(wrapper).toMatchSnapshot();
        done();
      });
    });

    it('should activeIndex be 2 when emit prev at the first slide', done => {
      const wrapper = shallowMount(Swiper, {
        slots: {
          default: [Slide, Slide, Slide]
        },
        propsData: {
          active: 0
        }
      });
      wrapper.vm.prev();

      expect(wrapper.vm.activeIndex).toBe(2);

      wrapper.vm.$nextTick(() => {
        expect(wrapper).toMatchSnapshot();
        done();
      });
    });

    it('should activeIndex be 2 when emit changeActiveIndex(2)', done => {
      const wrapper = shallowMount(Swiper, {
        slots: {
          default: [Slide, Slide, Slide]
        },
      });
      wrapper.vm.changeActiveIndex(2);

      expect(wrapper.vm.activeIndex).toBe(2);

      wrapper.vm.$nextTick(() => {
        expect(wrapper).toMatchSnapshot();
        done();
      });
    });
  });
});
