import React, { cloneElement } from 'react'
import Header from './Header'

const Main = (props) => (
  <div>
    <Header props={props}/>
    {cloneElement(props.children, props)}
  </div>
)

export default Main
