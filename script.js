const word = document.getElementById("word")
const text = document.getElementById("text")
const scoreEl = document.getElementById("score")
const timeEl = document.getElementById("time")
const endgameEl = document.getElementById("end-game-container")
const settingsBtn = document.getElementById("settings-btn")
const settings = document.getElementById("settings")
const settingsForm = document.getElementById("settings-form")
const difficultySelect = document.getElementById("difficulty")

const words = [
  "const",
  "let",
  "input",
  "image",
  "form",
  "style",
  "display",
  "container",
  "element",
  "class",
  "document",
  "background",
  "transition",
  "transform",
  "translate",
  "border",
  "radius",
  "margin",
  "padding",
  "select",
]

let randomWord

let score = 0

let time = 10

let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium"

difficultySelect.value = difficulty

text.focus()

const timeInterval = setInterval(updateTime, 1000)

function updateTime() {
  time--
  timeEl.innerHTML = time + "s"

  if (time === 0) {
    clearInterval(timeInterval)
    gameOver()
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>时间结束了</h1>
    <p>你的最终分数是${score}</p>
    <button onclick="location.reload()">再来一次</button>
  `
  endgameEl.style.display = "flex"
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function addWordDOM() {
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}

addWordDOM()

text.addEventListener("input", function (e) {
  const insertedText = e.target.value

  if (insertedText === randomWord) {
    addWordDOM()
    updateScore()

    e.target.value = ""

    time += 5

    updateTime()
  }
})

function updateScore() {
  score++
  scoreEl.innerHTML = score
}

settingsBtn.addEventListener("click", function () {
  settings.classList.toggle("hide")
})

settingsForm.addEventListener("change", function (e) {
  difficulty = e.target.value
  localStorage.setItem("difficulty", difficulty)
})
