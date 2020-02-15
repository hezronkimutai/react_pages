import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'

describe('App test.', () => {
  test('Buttons and snapshot when props is provided', () => {
    const wrapper = mount(<App />)
    wrapper
      .find('button')
      .at(0)
      .simulate('click')
    wrapper
      .find('button')
      .at(1)
      .simulate('click')
    wrapper
      .find('button')
      .at(2)
      .simulate('click')
    wrapper
      .find('button')
      .at(3)
      .simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
  test('Buttons and snapshot when props is provided', () => {
    const wrapper = mount(<App />)
    wrapper
      .find('button')
      .at(3)
      .simulate('click')
    wrapper
      .find('button')
      .at(0)
      .simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
})
