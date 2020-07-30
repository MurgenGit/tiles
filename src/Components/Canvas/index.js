import React, { useState } from 'react'
import Card from '../Card'
import './Canvas.css'
import { cardArr } from '../../helpers/cardArr'

const Canvas = () => {
  const [cards, setCards] = useState(() => cardArr())
  const [actives, setActives] = useState([])
  const [preventClicks, setPreventClicks] = useState(false)
  const [completed, setCompleted] = useState([])

  const toggleCard = (card) => {
    if (card.color === completed.find((c) => c === card.color)) return
    if (actives.length === 1 && card.id !== actives[0].id) {
      if (card.color === actives[0].color) {
        setActives([])
        setCards(
          cards.map((c) =>
            c.color === card.color ? { ...c, opened: true } : c
          )
        )
        setCompleted([...completed, card.color])
      } else {
        setActives([...actives, card])
        setPreventClicks(true)
        setTimeout(() => {
          setPreventClicks(false)
          setActives([])
        }, 1000)
      }
    } else {
      setActives([card])
    }
  }

  return (
    <div className="canvas">
      {cards.map((card) => (
        <Card
          {...card}
          active={actives.map((a) => a.id).includes(card.id)}
          key={card.id}
          onClick={preventClicks ? undefined : () => toggleCard(card)}
        />
      ))}
    </div>
  )
}

export default Canvas
