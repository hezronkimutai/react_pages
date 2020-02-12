# custom-react-pages  ![npm](https://img.shields.io/npm/dt/custom_react_pages) ![David](https://img.shields.io/david/peer/hezronkimutai/react_pages)

Custom reacts pages makes app development in react simple by providing a custom pagination. This means that the pagination functionality is provided but the styling is left to the developed

# Usage

- Install: `custom_react_pages`
```
...
import Pagination from 'custom-react-pages';

...
<Pagination
itemsPerPage={1},
data=[{firstName:'John',lastName:'Doe'},{firstName:'Nhoj',lastName:'Eod'}]
oneItem={(item)=><div><div>{item.firstName}</div><div>{item.lastName}</div></div>}
/>
...
```
