import React from 'react'
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar.js'
import { SearchResults } from '../SearchResults/SearchResults'
import { Playlist } from '../Playlist/Playlist'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {searchResults: [
      {name : 'test1', artist: 'test1', album: 'test1', id: 1},
      {name : 'test2', artist: 'test2', album: 'test2', id: 2},
      {name : 'test3', artist: 'test3', album: 'test3', id: 3}
    ],
    playlistName: 'Test Playlist',
    playlistTracks: [
      {name : 'test4', artist: 'test4', album: 'test4', id: 4},
      {name : 'test5', artist: 'test5', album: 'test5', id: 5},
      {name : 'test6', artist: 'test6', album: 'test6', id: 6}
    ]}

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)

  }
  
  addTrack(track) {

    let tracks = this.state.playlistTracks

    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track)

    this.setState({playlistTracks : tracks})
  }

  removeTrack(track) {
    const tracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    this.setState({playlistTracks : tracks})
  }

  updatePlaylistName(newName) {
    this.setState({playlistName: newName})
  }

  savePlaylist() {

  }

  search() {

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} /> 
          <div className="App-playlist">
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
          />
          <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
