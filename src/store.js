import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory }  from 'react-router'

import rootReducer from './reducers/index'

import burger from './data/burger'

const defaultState = {
  albums: burger.albums
}

const store = createStore(
  rootReducer, defaultState
)

export const history = syncHistoryWithStore(
  browserHistory, store
)

export default store
