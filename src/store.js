import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory }  from 'react-router'

import rootReducer from './reducers/index'

import burger from './data/burger'

const initialState = {
  albums: burger.albums,
  ui: {
    searchExpanded: false
  }
}

const store = createStore(
  rootReducer, initialState
)

export const history = syncHistoryWithStore(
  browserHistory, store
)

export default store
