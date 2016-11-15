import React, { cloneElement } from 'react'
import { Link } from 'react-router'

const Main = (props) => (
  <div>
    <header>
      <h1>
        <Link to='/'>Ramona</Link>
        {cloneElement(props.children, props)}
      </h1>
    </header>
  </div>
)

export default Main
