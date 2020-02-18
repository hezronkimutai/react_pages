import React from 'react'
import Pagination from '../lib/pagination'
import { connect } from 'react-redux'
import './assets/App.scss'

const App = ({ data }) => (
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

const mapStateToProps = state => ({
  data: state,
})

export default connect(mapStateToProps, null)(App)
