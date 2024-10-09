import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';
import autoproductsArr from "./autoproducts.json"

ReactDOM.render(
  <Shop
   name="Магазин Автотоваров"
   address = "г. Минск, ул. Лермонтова д.35"
   title = "Наш ассортимент"
   autoproducts = {autoproductsArr} />,
  document.getElementById('container')
);
