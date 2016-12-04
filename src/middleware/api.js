const BASE_URL = 'https://api.spotify.com/v1/search?query=label%3A%22'
const EXTRA = '%22&type=album'

var myHeaders = new Headers();

var myInit = {
  method: 'GET',
  headers: myHeaders,
  Accept: 'application/json',
  Authorization: 'Bearer BQD03SZnqRC8CcayIs54MNoOhFx-tD8AM9Jg9B4KGyepgo7pEqxkqszqwBJ4Jl7q4Jtzoqeh6VkvHmTAuKMWlRXKciZJOqJedeU0_9wCJWWsA9SWRG44VijVLiUTh93dvprrAE2ailNIDCVG80ontg'
}

export const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== 'SEARCH_FOR_LABEL') {
    return next(action)
  }

  const { payload } = action

  fetch(BASE_URL + payload + EXTRA, myInit)
    .then(response => response.json())
    .then(response => dispatch({
      type: 'ALBUMS_FETCH_SUCCESS',
      payload: response.albums
    }))
    // .then(response => dispatch({ type: payload.success, response }))
}
