// Write your code here

import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchText = event => {
    this.setState({searchInput: event.target.value})
  }

  onUpdateSearchItem = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchSuggestion = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
       <div className="app-container"></div>
      <div >
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="google-search-container">
          <div className="search-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onSearchText}
              value={searchInput}
            />
          </div>
          <ul className="google-suggestion-list-card">
            {searchSuggestion.map(eachSuggestion => (
              <SuggestionItem
                eachSuggestionItem={eachSuggestion}
                key={eachSuggestion.id}
                arrowSelection={this.onUpdateSearchItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
