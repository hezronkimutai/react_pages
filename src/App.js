import React from 'react'
import Pagination from './pagination'

const App = () => (
  <Pagination
    itemsPerPage={1}
    activeStyle={{ backgroundColor: '#00b9f2', color: 'white' }}
    next="next"
    prev="previous"
    data={[
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Nhoj', lastName: 'Eod' },
      { firstName: 'Nhoj', lastName: 'Eod' },
      { firstName: 'Nhoj', lastName: 'Eod' },
      { firstName: 'Nhoj', lastName: 'Eod' },
      { firstName: 'Nhoj', lastName: 'Eod' },
      { firstName: 'Nhoj', lastName: 'Eod' },
      { firstName: 'Nhoj', lastName: 'Eod' },
      { firstName: 'Nhoj', lastName: 'Eod' },
      { firstName: 'Nhoj', lastName: 'Eod' },
    ]}
    oneItem={item => (
      <div>
        <div>{item.firstName}</div>
        <div>{item.lastName}</div>
      </div>
    )}
  />
)

export default App
