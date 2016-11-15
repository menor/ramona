import React from 'react';
import { render } from 'react-dom';

// react router
import {
  Router, Route, IndexRoute
} from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// css
import './index.css';

// components
import App from './components/App'
import Album from './components/Album'
import AlbumGrid from './components/AlbumGrid'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={AlbumGrid}></IndexRoute>
        <Route path='/view/:albumId' component={Album}></Route>
      </Route>
    </Router>
  </Provider>
)


render(
  router,
  document.getElementById('root')
);
