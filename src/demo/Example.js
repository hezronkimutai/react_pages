import React from 'react';
import Pagination from './../pagination';
import data from './../mockData';
import '../assets/example.css';

const Example = () => {

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
    <Pagination
      itemsPerPage={1}
      activePageStyle={{ backgroundColor: '#00b9f2', color: 'white' }}
      next="next"
      prev="previous"
      data={data}
      pageButtons={7}
      onePage={(item, index) => (
        <div key={index} className="paginate-data">
          <div>{item.firstName}</div>
          <div>{item.lastName}</div>
        </div>
      )}
      paginationContainer={centertBottomPagination.paginationContainer}
      paginationButtons={centertBottomPagination.paginationButtons}
    />
  );
}

export default Example;
