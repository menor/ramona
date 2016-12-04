import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
// Using hashHistory while I host on gh-pages because of this problem:
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#notes-on-client-side-routing
import { hashHistory }  from 'react-router'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'
import { apiMiddleware } from './middleware/api'

import burger from './data/burger'

const initialState = {
  albums: burger.albums,
  ui: {
    searchExpanded: false
  }
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, apiMiddleware)
)

export const history = syncHistoryWithStore(
  hashHistory, store
)

export default store
