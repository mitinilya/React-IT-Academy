import React from 'react';
import ReactDOM from 'react-dom';
import { MobileCompany } from './components/MobileCompany';
import { Provider } from 'react-redux';

import { mobile } from './redux/mobile';

export const App = () => (
  <Provider store={mobile}>
      <div>
          <MobileCompany />
      </div>
  </Provider>
);
