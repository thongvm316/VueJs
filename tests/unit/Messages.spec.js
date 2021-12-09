import { mount } from '@vue/test-utils'
import Messages from '@/components/Messages.vue'

describe('Messages.vue', () => {
  it('render props.msg when passed a message', () => {
    const wrapper = mount(Messages, {
      props: {
        msg: 'Hello Unit Test',
      },
    })

    console.log(wrapper.get('[data-test="message"]').text())
    expect(wrapper.get('[data-test="message"]').text()).toContain('Hello')
  })
})
