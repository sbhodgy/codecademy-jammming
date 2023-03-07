import React from 'react'
import './SearchBar.css'

export class SearchBar extends React.Component {
    
    constructor(props) {
        super(props)
        this.props.onSearch = this.props.onSearch(this)
        this.handleTermChange = this.handleTermChange.bind(this)

    }

    handleTermChange(e) {
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
            <button className="SearchButton" onSearch={this.props.onSearch}>SEARCH</button>
        </div>
        )
    }
}

