import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory }  from 'react-router'
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
  browserHistory, store
)

export default store
