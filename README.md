# custom-react-pages ![npm](https://img.shields.io/npm/dt/custom_react_pages) ![David](https://img.shields.io/david/peer/hezronkimutai/react_pages)[![Maintainability](https://api.codeclimate.com/v1/badges/407669f9a786b380a96c/maintainability)](https://codeclimate.com/github/hezronkimutai/react_pages/maintainability)[![CircleCI](https://circleci.com/gh/hezronkimutai/react_pages/tree/develop.svg?style=svg)](https://circleci.com/gh/hezronkimutai/react_pages/tree/develop)

Custom reacts pages makes app development in react simple by providing a custom pagination. This means that the pagination functionality is provided but the styling is left to the developer

# Installation

- `npm -i custom_react_pages`

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