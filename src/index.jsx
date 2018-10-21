import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/_app/App';
import store from './containers/_app/store';
import ScrollToTop from './containers/_app/ScrollToTop';

render(
  <Provider store={store}>
    <BrowserRouter basename="/easydev">
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
