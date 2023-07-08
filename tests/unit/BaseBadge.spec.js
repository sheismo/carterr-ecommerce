import BaseBadge from '@/components/ui/BaseBadge.vue'
import { shallowMount } from '@vue/test-utils'

describe('BaseBadge', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(BaseBadge)
    let badge = wrapper.find('.badge')
    expect(badge.exists()).toBe(true)
  })
})