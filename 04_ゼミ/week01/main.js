const baseballButton = document.getElementById("baseball")
const tennisButton = document.getElementById("tennis")
const soccerButton = document.getElementById("soccer")
const soccer = document.getElementById("t")

const text = document.getElementById("answer")

baseballButton.onclick = function() {
  text.textContent = "残念違います"
}
tennisButton.onclick = function() {
  text.textContent = "正解！夏が好きです"
}
soccerButton.onclick = function() {
  text.textContent = "残念、不正解"
}
soccer.onclick = function() {
  text.textContent = "残念違います"
}
