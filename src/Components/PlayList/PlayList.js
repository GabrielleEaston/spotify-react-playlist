import React, { Component } from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';



class PlayList extends Component {
  handleNameChange = (event) => {
    this.props.onNameChange(event.target.value);
}

  render() {
    return (
      <div class="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove} isRemoval={true}/>
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}
export default PlayList;