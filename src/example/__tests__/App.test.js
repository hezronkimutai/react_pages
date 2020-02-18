import React, { useState as useStateMock } from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import Example from '../example'
import configureStore from 'redux-mock-store'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

const mockStore = configureStore([])
const store = mockStore({
  data: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Hezron', lastName: 'Kimutai' },
    { firstName: 'John', lastName: 'Doe' },
  ],
  itemsPerPage: 5,
  pageButtons: 10,
})
const store1 = mockStore({
  data: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Hezron', lastName: 'Kimutai' },
    { firstName: 'John', lastName: 'Doe' },
  ],
  itemsPerPage: 5,
  pageButtons: 1,
})

const setState = jest.fn()
describe('App test.', () => {
  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState])
  })
  test('Buttons and snapshot when props is provided', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
  test('Buttons and snapshot when props is provided', () => {
    const wrapper = mount(<Example store={store} />)
    wrapper
      .find('button')
      .at(0)
      .simulate('click')
    wrapper
      .find('button')
      .at(2)
      .simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
  test('Buttons and snapshot when props is provided', () => {
    const wrapper = mount(<Example store={store1} />)
    wrapper
      .find('button')
      .at(1)
      .simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
})

describe('App test when page number does not exist', () => {
  beforeEach(() => {
    useStateMock.mockImplementation(() => [-2, setState])
  })
  test('Buttons and snapshot when props is provided', () => {
    const wrapper = mount(<Example store={store1} />)
    wrapper
      .find('button')
      .at(2)
      .simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
})

describe('when page number is is the last', () => {
  beforeEach(() => {
    useStateMock.mockImplementation(() => [2, setState])
  })
  test('Buttons and snapshot when props is provided', () => {
    const wrapper = mount(<Example store={store1} />)
    wrapper
      .find('button')
      .at(0)
      .simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
})
