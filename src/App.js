import {Component} from 'react'
import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]
class App extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachText =>
      eachText.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="google-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          alt="search icon"
          className="search-icon"
        />
        <input
          type="search"
          onChange={this.onSearchInput}
          value={searchInput}
        />
        <ul>
          {searchResults.map(each => (
            <GoogleSuggestions googleList={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default App
