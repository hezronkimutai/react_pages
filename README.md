
# custom-react-pages
![npm](https://img.shields.io/npm/dt/custom_react_pages)
![David](https://img.shields.io/david/peer/hezronkimutai/react_pages)
[![Maintainability](https://api.codeclimate.com/v1/badges/407669f9a786b380a96c/maintainability)](https://codeclimate.com/github/hezronkimutai/react_pages/maintainability)
[![CircleCI](https://circleci.com/gh/hezronkimutai/react_pages/tree/develop.svg?style=svg)](https://circleci.com/gh/hezronkimutai/react_pages/tree/develop)
[![Coverage Status](https://coveralls.io/repos/github/hezronkimutai/react_pages/badge.svg?branch=develop)](https://coveralls.io/github/hezronkimutai/react_pages?branch=develop)

Custom reacts pages makes app development in react simple by providing a custom pagination. This means that the pagination functionality is provided but the styling is left to the developer to handle.

# Installation

- `npm i custom_react_pages`

# Demo

Click the [here](https://custom-react-pages.herokuapp.com/) to view a demo of the package

![Alt Text](https://res.cloudinary.com/hezzie/image/upload/v1581792580/ezgif.com-crop_1_yradu7.gif)

# Usage

```
...
import Pagination from 'custom-react-pages';

...
<Pagination
itemsPerPage={1}
next="next"
prev = "previous"
data=[{firstName:'John',lastName:'Doe'},{firstName:'Nhoj',lastName:'Eod'}]
oneItem={(item)=><div><div>{item.firstName}</div><div>{item.lastName}</div></div>}
/>
...
```

## Styling the pagination buttons

The following is the JSX structure of the pagination buttons. Note that the content that will appear inthe `prev` and `next` buttons is completely dependent upon you. Moreover, the styling we have provided below is just an example incase you are using a `.css` or `.scss` files, you can however style it the way you wish.

```
<Pagination
      itemsPerPage={5}
      activePageStyle={//Add css style for active page button e.g { backgroundColor: '#00b9f2', color: 'white' }}
      next= {//Add what you want to appear as the next button e.g 'next'}
      prev={//Add what you want to appear as previous button e.g 'prev'}
      data={//This is the array of data you want to paginate e.g [{fistName:'john'},{firstName:'Doe'}]}
      pageButtons={// Add the number of page buttons you want to appear e.g 10}
      onePage={// Format of a single item goes here e.g
          (item, index) => (
        <div key={index} className="oneItem">
          <div>{item.firstName}</div>
        </div>
      )}
    />
```

## styling (.css file)

```
...
.pagination-buttons{
    //Your style goes here
}
.arrows{
    //Your style goes here
}
.arrows button{
    //Your style goes here
}
.pages{
    //Your style goes here
}
.pages button{
    //Your style goes here
}
...
```

## styling (.scss file)

```
...
.pagination-buttons{
    //Your style goes here
    .arrows{
    //Your style goes here
        button{
        //Your style goes here
        }
    }
.pages{
    //Your style goes here
        button{
        //Your style goes here
        }
    }
}
...
```

# Contribution

This package is an open source project. Any developer who wish to contribute on this project can follow the steps below.

- Raise an issue, An issue can be anything valid that you wish to work on.
- The maintainers will review the issue and if it is valid, we will add you as a collaborator.
- Fork the repo and create a new branch
- Work on what you wanted to work on and raise a PR.
- Your PR will be reviewed and if it is flawless, we will go ahead and merge your PR.

# Author

hezronkimutai

# Contributors

- victorkarangwa4
- william0000
- niyongaboeric
