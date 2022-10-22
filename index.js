let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.querySelector('.message-el')
let cardsEl = document.querySelector('.cards-el')
let sumEl = document.querySelector('.sum-el')
let startGameButton = document.querySelector('.start-btn')
let newCardButton = document.querySelector('.new-card-btn')

let player = {
  name: 'Anna',
  chips: 145,
}

let playerEl = document.querySelector('.player-el')
playerEl.textContent = `${player.name}: $${player.chips}`

function getRandomCard() {
  const randomNumber = Math.round(Math.random() * 12) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function renderGame() {
  cardsEl.textContent = 'Cards: '
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `
  }
  sumEl.textContent = `Sum: ${sum}`

  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game"
    isAlive = false
  }
  messageEl.textContent = message
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function getNewCard() {
  if (isAlive && !hasBlackJack) {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
  }
}

startGameButton.addEventListener('click', startGame)
newCardButton.addEventListener('click', getNewCard)
