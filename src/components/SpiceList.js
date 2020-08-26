import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  renderSpices() {
    let filteredSpices=this.props.spices.filter(spice => {
      return spice.notes.toLowerCase().includes(this.state.search.toLowerCase())
    })

    if(this.state.fourStarOnly){
      filteredSpices = filteredSpices.filter(spice => spice.rating >=4)
    }
      
      return filteredSpices.map(spice => (
        <SpiceItem key={spice.id} spice={spice} />
      ))
  }

  handleSearch = (event) => {this.setState({search: event.target.value})}
  handleFourStar = () => {this.setState({fourStarOnly: !this.state.fourStarOnly})}

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input type="text" placeholder="Search By Tasting Notes..." onChange={this.handleSearch} />
            </div>
            <label>
              4 Star Only <input type="checkbox" onChange={this.handleFourStar}/>
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList