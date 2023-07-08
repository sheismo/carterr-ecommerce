import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/layout/TheHeader'

describe('TheHeader.vue', () => {
  const wrapper = shallowMount(TheHeader)
  it('displays the brand name and action icons', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.hello').text()).toMatch('Carterr')
  })

  it('renders a login action button',() => {
    const action = wrapper.get('[class="login"]')
    expect(action.text()).toBe('login')
  })
})

