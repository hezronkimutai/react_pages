import React, { Component } from 'react'
import Pagination from '../pagination'
import { connect } from 'react-redux'
import './assets/App.scss'

class App extends Component {
  render() {
    const { data } = this.props

    return (
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
  }
}
const mapStateToProps = state => ({
  data: state,
})

export default connect(mapStateToProps, null)(App)
