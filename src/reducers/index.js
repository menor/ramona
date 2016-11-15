import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import albums from './albums'
import search from './search'

const rootReducer = combineReducers({
  albums,
  search,
  routing: routerReducer
})

export default rootReducer
