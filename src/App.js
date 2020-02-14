import React from 'react'
import Pagination from './pagination'
import data from './mockData'
import './assets/App.scss'

const App = () => (
  <div className="container">
    <h1>Custom React Pages</h1>
    <Pagination
      itemsPerPage={5}
      activePageStyle={{ backgroundColor: '#00b9f2', color: 'white' }}
      next="next"
      prev="prev"
      data={data}
      pageButtons={10}
      onePage={(item, index) => (
        <div key={index} className="oneItem">
          <div>{item.firstName}</div>
          <div>{item.lastName}</div>
        </div>
      )}
    />
  </div>
)

export default App
