import { mount } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'

describe('Nav.vue', () => {
  it('renders a profile link', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          isLoggedIn: true, // get data from Component Nav
        }
      },
    })

    const profileLink = wrapper.get('#profile')
    expect(profileLink.text()).toEqual('My Profile')
  })

  it('should not render profile link', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          isLoggedIn: false, // get data from Component Nav
        }
      },
    })

    const profileLink = wrapper.find('#profile')
    expect(profileLink.exists()).toBe(false)
  })
})
