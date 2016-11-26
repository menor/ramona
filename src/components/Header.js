import React from 'react'
import { Link } from 'react-router'

import './Header.css'

import Search from './Search'

const Header = ({props}) => {
  const logo = (
    <h1 className='logo'>
      <Link to='/'>Ramona</Link>
    </h1>
  )

  const searchButton = (
    <button onClick={props.expandSearch} className='searchButton'>
      S
    </button>
  )

  return (
    <header className='header'>
      { logo }
      { props.ui.searchExpanded ? <Search onBlurAction={props.collapseSearch} onClickAction={props.searchLabel} onChangeAction={props.updateLabelInput}/> : searchButton }
    </header>
  )
}
export default Header
