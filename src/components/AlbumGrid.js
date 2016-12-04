import React from 'react'
import Album from './Album'
import './AlbumGrid.css'

const AlbumGrid = ({albums}) => (
  <div className='album-grid'>
    {albums.items.map((album, i) =>{
      return (<Album album={album} key={i} i={i}/>)
    })}
  </div>
)

export default AlbumGrid
