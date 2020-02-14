import React from 'react';
import Pagination from './pagination';
import data from './mockData'

const App = () => (
  <Pagination
    itemsPerPage={1}
    activePageStyle={{ backgroundColor: '#00b9f2', color: 'white' }}
    next="next"
    prev="previous"
    data={data}
    pageButtons={7}
    onePage={(item, index) => (
      <div key={index}>
        <div>{item.firstName}</div>
        <div>{item.lastName}</div>
      </div>
    )}
  />
)

export default App
