// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachSuggestionItem, arrowSelection} = props
  const {suggestion} = eachSuggestionItem

  const getSearchText = () => {
    arrowSelection(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion-desc">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-img"
        onClick={getSearchText}
      />
    </li>
  )
}

export default SuggestionItem
