import React, { PropTypes } from 'react'
import './Search.css'

const Search = ({onClickAction}) => (
  <form
    className='search-container'
    onSubmit={onClickAction}
  >
    <input
      autoFocus
      id='label'
      className='search'
      type='text'
      placeholder='search for a label'
    />
    <input type='submit' className='submit' value='>' />
  </form>
)

// FInd a way to pass the search term to the function

Search.propTypes = {
  searchLabel: PropTypes.func,
  onBlurAction: PropTypes.func
}

export default Search
