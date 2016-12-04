import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import albums from './albums'
import search from './search'
import ui from './ui'

const rootReducer = combineReducers({
  albums,
  search,
  ui,
  routing: routerReducer
})

export default rootReducer
