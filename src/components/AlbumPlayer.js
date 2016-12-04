import React from 'react'

const AlbumPlayer = ({album}) => (
  <iframe
   src={`https://embed.spotify.com/?uri=${album.uri}&theme=white`}
   width='320'
   height='380'
   frameBorder='0'
   allowTransparency='true'>
  </iframe>
)

export default AlbumPlayer
