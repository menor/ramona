import React, { Component } from 'react'

import './Album.css';
import AlbumCard from './AlbumCard'
import AlbumPlayer from './AlbumPlayer'

class Album extends Component {
  state = {
    selected: false
  }

  onAlbumClicked = () => {
    this.setState({selected: !this.state.selected})
  }

  render() {
    return (
      <div className='album-container'>
        { this.state.selected
          ? <AlbumPlayer album={this.props.album} />
          : <AlbumCard album={this.props.album} onAlbumClicked={this.onAlbumClicked}/>
        }
      </div>
    )
  }
}

export default Album
