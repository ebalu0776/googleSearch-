const GoogleSuggestions = props => {
  const {googleList} = props
  const {suggestion} = googleList

  return (
    <div className="card-container">
      <li>
        <p className="paragraph">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-left"
        />
      </li>
    </div>
  )
}

export default GoogleSuggestions
