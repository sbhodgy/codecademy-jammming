import React from 'react'
import { Tracklist } from '../Tracklist/Tracklist';
import './Playlist.css'

export class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value)
    }

    render() {
        // const defaultValue = 'New Playlist';
        return (
            <div className="Playlist">
                <input 
                    defaultValue={"New Playlist"}
                    onChange={this.handleNameChange} />
                <Tracklist 
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                />
                <button className="Playlist-save" onSave={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}