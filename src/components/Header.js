import React from 'react'

const Header = ({ spiceCount }) => {
  return (
    <header>
      <h1>The Spice Store</h1>
      <h3>We have {spiceCount} spices in stock!</h3>
    </header>
  )
}

export default Header