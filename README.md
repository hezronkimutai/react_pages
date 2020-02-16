# custom-react-pages 
![npm](https://img.shields.io/npm/dt/custom_react_pages)
 ![David](https://img.shields.io/david/peer/hezronkimutai/react_pages)
 [![Maintainability](https://api.codeclimate.com/v1/badges/407669f9a786b380a96c/maintainability)](https://codeclimate.com/github/hezronkimutai/react_pages/maintainability)
 [![CircleCI](https://circleci.com/gh/hezronkimutai/react_pages/tree/develop.svg?style=svg)](https://circleci.com/gh/hezronkimutai/react_pages/tree/develop)
 [![Coverage Status](https://coveralls.io/repos/github/hezronkimutai/react_pages/badge.svg?branch=develop)](https://coveralls.io/github/hezronkimutai/react_pages?branch=develop)

Custom reacts pages makes app development in react simple by providing a custom pagination. This means that the pagination functionality is provided but the styling is left to the developer

# Demo
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/33821734/74608226-17ca7380-50e8-11ea-86d6-f00b46294882.gif)

# Installation

- `npm -i custom_react_pages`

# Usage
``` jsx
...
import Pagination from 'custom-react-pages';

...
<Pagination
itemsPerPage={1}
next="next"
prev = "previous"
data=[{firstName:'John',lastName:'Doe'},{firstName:'Nhoj',lastName:'Eod'}]
oneItem={(item)=><div><div>{item.firstName}</div><div>{item.lastName}</div></div>}
// option props
paginationContainer={centertBottomPagination.paginationContainer} // move pagination either on top or bottom
paginationButtons={centertBottomPagination.paginationButtons}    // move pagination on the left or center or right of the page
/>
...
```

## Styling the pagination buttons

The following is the JSX structure of the pagination buttons. Note that the content that will appear inthe `prev` and `next` buttons is completely dependent upon you. Moreover, the styling we have provided below is just an example incase you are using a `.css` or `.scss` files, you can however style it the way you wish.

``` jsx
<div className="pagination-buttons">
    <div className="arrows">
        <button>{prev}</button>
    </div>
    <div className="pages">
        <button>1</button>
        <button>2</button>
    </div>
    <div className="arrows">
        <button>{next}</button>
    </div>
</div>
```

## styling (.css file)
``` css
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
``` css
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

## Customize CSS pagination
You have 2 ways to customize style. Firstly, you can use demo styles, you can find in `src/assets/example.css`.
Secondly you can write your own.

> Demo helps to position pagination anywhere on the page. We have six ways to position it.
1. topLeftPagination
2. topRightPagination
3. bottomLeftPagination
4. bottomRightPagination
5. centerTopPagination
6. centerBottomPagination