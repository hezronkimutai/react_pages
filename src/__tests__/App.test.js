import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'

describe('App test.', () => {
  test('Buttons and snapshot when props is provided', () => {
    const wrapper = mount(
      <App
        itemsPerPage={1}
        activePageStyle={{ backgroundColor: '#00b9f2', color: 'white' }}
        next="next"
        prev="previous"
        data={[{ firstName: 'John', lastName: 'Doe' },{ firstName: 'Alice', lastName: 'Bot' }]}
        pageButtons={7}
        onePage={(item, index) => (
          <div key={index}>
            <div>{item.firstName}</div>
            <div>{item.lastName}</div>
          </div>
        )}
      />
    )
    const page1 = wrapper.find('button').at(1)
    const page2 = wrapper.find('#prev')
    const page3 = wrapper.find('#next')
    page1.simulate('click')
    page2.simulate('click')
    page3.simulate('click')
    expect(jest.fn().mock.calls).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  test('Test snapshot when props is not provided', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
