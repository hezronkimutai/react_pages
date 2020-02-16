import React from 'react'
import Pagination from './../pagination';
import data from './../mockData';
import '../assets/App.scss';

const App = () => {
  const topLeftPagination = {
    paginationContainer: {
      flexDirection: 'column-reverse',
    },
    paginationButtons: {
      marginRight: 'auto',
    }
  };

  const topRightPagination = {
    paginationContainer: {
      flexDirection: 'column-reverse',
    },
    paginationButtons: {
      marginLeft: 'auto',
    }
  };

  const bottomLeftPagination = {
    paginationContainer: {
      flexDirection: 'column',
    },
    paginationButtons: {
      marginRight: 'auto',
    }
  };

  const bottomRightPagination = {
    paginationContainer: {
      flexDirection: 'column',
    },
    paginationButtons: {
      marginLeft: 'auto',
    }
  };
  const centerTopPagination = {
    paginationContainer: {
      flexDirection: 'column-reverse',
    },
    paginationButtons: {
      margin: 'auto',
    }
  };
  const centertBottomPagination = {
    paginationContainer: {
      flexDirection: 'column',
    },
    paginationButtons: {
      margin: 'auto',
    }
  };

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
        paginationContainer={topLeftPagination.paginationContainer}
        paginationButtons={topLeftPagination.paginationButtons}
      />
    </div>
  )
}

export default App
