import { shuffle } from './shuffle'

export const cardArr = () => {
  const arrColors = [
    { color: '#1211E6', opened: false },
    { color: '#CCFF1A', opened: false },
    { color: '#FF1A66', opened: false },
    { color: '#E6331A', opened: false },
    { color: '#33FFCC', opened: false },
    { color: '#66114D', opened: false },
    { color: '#B366CC', opened: false },
    { color: '#4D8000', opened: false },
  ]

  const copyOne = JSON.parse(JSON.stringify(arrColors))
  const copyTwo = JSON.parse(JSON.stringify(arrColors))
  const canvasArr = [].concat(copyOne, copyTwo)

  let id = 0

  shuffle(canvasArr)
  canvasArr.map((e) => (e.id = id++))

  return canvasArr
}
