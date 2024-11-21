const word = document.getElementById("word")
const text = document.getElementById("text")
const scoreEl = document.getElementById("score")
const timeEl = document.getElementById("time")
const endgameEl = document.getElementById("end-game")
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
})
