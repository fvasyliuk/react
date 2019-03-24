import React from 'react';
import { Tab } from 'semantic-ui-react';
import ProductList from '../list_products/ProductsList';

const panes = [
  { menuItem: 'Всі', render: () => <ProductList /> },
  { menuItem: 'Яблука', render: () => <ProductList filter='Яблука'/> },
  { menuItem: 'Полуниці', render: () => <ProductList filter='Полуниці'/> },
  { menuItem: 'Малини', render: () => <ProductList filter='Малини'/> },
]

const Sidebar = () => (
  <Tab 
    grid= {{paneWidth: 10, tabWidth: 3}}
    menu= {{ fluid: true, vertical: true, tabular: true }} 
    panes= {panes} 
  />
)

export default Sidebar