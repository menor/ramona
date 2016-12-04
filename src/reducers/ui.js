const initialState = {
  searchExpanded: false
}

const uiReducer = (state = initialState, action) => {

  switch(action.type) {

    case 'UI_EXPAND_SEARCH':
      return Object.assign({}, state, {
        searchExpanded: true
      })

    case 'UI_COLLAPSE_SEARCH':
    case 'SEARCH_FOR_LABEL':
    case 'ALBUMS_FETCH_SUCCESS':
      return Object.assign({}, state, {
        searchExpanded: false
      })

    default:
      return state
  }
}

export default uiReducer
