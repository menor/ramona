import React from 'react'
import './Album.css';

const Album = ({album}) => (
  <div className='album-container'>
    <a href={album.href}>
      <img className='album-cover' src={album.images[0].url} alt=''/>
      <h2 className='album-artist'>
        {
          album.artists.length > 1
            ? 'Various Artists'
            : album.artists[0].name
        }
      </h2>
      <h3 className='album-title'>
        { album.name }
      </h3>
    </a>
  </div>
)

export default Album
