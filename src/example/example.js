import React from 'react'
import Pagination from '../lib/pagination'
import { connect } from 'react-redux'
import './assets/App.scss'

const App = ({ data, itemsPerPage, pageButtons }) => (
  <div className="container">
    <h1>Custom React Pages</h1>
    <Pagination
      itemsPerPage={itemsPerPage}
      activePageStyle={{ backgroundColor: '#00b9f2', color: 'white' }}
      next="next"
      prev="prev"
      data={data}
      pageButtons={pageButtons}
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
  data: state.data,
  itemsPerPage: state.itemsPerPage,
  pageButtons: state.pageButtons,
})

export default connect(mapStateToProps, null)(App)
