import React from 'react';
import ReactDOM from 'react-dom';

import Warning from './components/Shop';

ReactDOM.render(
  <Warning name="Магазин Автотоваров" address = "г. Минск, ул. Лермонтова д.35" />,
  document.getElementById('container')
);
