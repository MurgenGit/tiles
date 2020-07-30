import React from 'react'

import './Card.css'

const Card = ({ active, color, opened, onClick }) => {
  const cardStyles = {
    backgroundColor: opened || active ? color : 'black',
  }

  return <div className="card" style={cardStyles} onClick={onClick} />
}

export default Card
