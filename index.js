
// set players scores to 0, create vairables for game state
// let means that 
let player1Score = 0
let player2Score = 0

// since theres only 2 players, you only have to set one players turn to true
let player1Turn = true

// create vairables to store refrences to the necessary DOM nodes
// const means that vairable can be changed
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton() {
  rollBtn.style.display = "none"
  resetBtn.style.display = "block"

}


// find out which players turn it is
rollBtn.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 6) + 1


  if (player1Turn) {
    // update player score
    player1Score += randomNumber
    player1Scoreboard.textContent = player1Score

    //add in number for dice
      player1Dice.textContent = randomNumber

    // switch shadow from current player
      player1Dice.classList.remove('active')
      player2Dice.classList.add('active')

    // updating text for player turn
    message.textContent = "Player 2 Turn"

  } else {
    // update player score
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score

      //add in number score for dice
      player2Dice.textContent = randomNumber

      // switch shadow from current player
      player2Dice.classList.remove('active')
      player1Dice.classList.add('active')

      // updating text for player turn
    message.textContent = "Player 1 Turn"
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 has won!"
    showDisplayButton()
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won!"
    showDisplayButton()
  }

  player1Turn = !player1Turn
})

resetBtn.addEventListener("click", function(){
  reset()
})

function reset() {
  message.textContent = "Player 1 Turn"
  player1Scoreboard.textContent = 0
  player2Scoreboard.textContent = 0
  player1Dice.textContent = '-'
  player2Dice.textContent = '-'
  player1Score = 0
  player2Score = 0
  player1Turn = true
  resetBtn.style.display = "none"
  rollBtn.style.display = "block"
  player2Dice.classList.remove("active")
  player1Dice.classList.add("active")
}

