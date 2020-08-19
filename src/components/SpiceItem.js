import React from 'react'
import StarRating from './StarRating'

class SpiceItem extends React.Component {


  render() {
    const { image, title, description, notes, rating } = this.props.spice
    return (
      <div className="spice-item card">
        <img src={image} alt={title} />
        <div className="details">
          <button className="favorite">
            <span role="img" aria-label="heart">
              {/* TODO: find a way to toggle this value when the button is clicked!  */}
              {true ? "🤍" : "♡"}
            </span>
          </button>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Tasting Notes: <em>{notes}</em></p>
          <p>Rating: <StarRating percentage={rating / 5} /></p>
        </div>
      </div>
    )
  }
}

export default SpiceItem