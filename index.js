// Get references to the score elements
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let resetBtn = document.getElementById("reset-btn")

// Initialize scores
let homeScoreValue = 0
let guestScoreValue = 0

// Home team scoring functions
function homeAdd1() {
    homeScoreValue += 1
    homeScore.textContent = homeScoreValue
}

function homeAdd2() {
    homeScoreValue += 2
    homeScore.textContent = homeScoreValue
}

function homeAdd3() {
    homeScoreValue += 3
    homeScore.textContent = homeScoreValue
}

// Guest team scoring functions
function guestAdd1() {
    guestScoreValue += 1
    guestScore.textContent = guestScoreValue
}

function guestAdd2() {
    guestScoreValue += 2
    guestScore.textContent = guestScoreValue
}

function guestAdd3() {
    guestScoreValue += 3
    guestScore.textContent = guestScoreValue
}


function reset() {
  homeScore.textContent = 0
  guestScore.textContent = 0 
}
