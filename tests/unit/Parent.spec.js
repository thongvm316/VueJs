import { shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

// * shallowMount: for test components with isolate
describe('Parent.vue', () => {
  it('', () => {
    const wrapper = shallowMount(Parent)

    expect(wrapper.text()).toContain('Parent')
  })
})
