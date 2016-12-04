const albums = (state = {}, action) => {

  switch(action.type) {

    case 'ALBUMS_FETCH_SUCCESS':
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}

export default albums
