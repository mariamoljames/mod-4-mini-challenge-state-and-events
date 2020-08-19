import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  renderSpices() {
    return this.props.spices.map(spice => (
      <SpiceItem key={spice.id} spice={spice} />
    ))
  }

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input type="text" placeholder="Search By Tasting Notes..." />
            </div>
            <label>
              4 Star Only <input type="checkbox" />
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList