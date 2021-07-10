const inputElement = document.getElementById("input-todo")
const inputElement2 = document.getElementById("input-todo2")
const inputElement3 = document.getElementById("input-todo3")
const container = document.getElementById("cards-container")
const container2 = document.getElementById("cards-container2")
const container3 = document.getElementById("cards-container3")
const addButton = document.getElementById("add-button")
let list = []
let list2 = []
let list3 = []
let list4 = []

if (localStorage.list) {
  // 状態の更新 list: [] -> ["こんにちは"]
  list = JSON.parse(localStorage.list)

  // 状態の変化を画面に表示する
  for (const text of list) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)
  }
}

if (localStorage.list2) {
  // 状態の更新 list: [] -> ["こんにちは"]
  list2 = JSON.parse(localStorage.list2)

  // 状態の変化を画面に表示する
  for (const text of list2) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container2.append(card)
  }
}

if (localStorage.list3) {
  // 状態の更新 list: [] -> ["こんにちは"]
  list3 = JSON.parse(localStorage.list3)

  // 状態の変化を画面に表示する
  for (const text of list3) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container3.append(card)
  }
}

// addButton.onclick = function() {
//   const text = inputElement.value

//   // 状態の更新 list: ["こんにちは"] -> ["こんにちは", "こんばんは"]
//   list.push(text)
//   localStorage.list = JSON.stringify(list)

//   // 状態の変化を画面に表示する
//   const card = document.createElement("div")
//   card.className = "card"
//   card.textContent = text
//   container.append(card)

//   inputElement.value = ""
// }

inputElement.addEventListener("keypress", test_ivent)
inputElement2.addEventListener("keypress", test_ivent2)
inputElement3.addEventListener("keypress", test_ivent3)

function test_ivent(e) {
  if (e.keyCode === 13) {
    const text = inputElement.value
    // 状態の更新 list: ["こんにちは"] -> ["こんにちは", "こんばんは"]
    list.push(text)
    localStorage.list = JSON.stringify(list)

    // 状態の変化を画面に表示する
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)

    inputElement.value = ""
  }
  return false
}

function test_ivent2(e) {
  if (e.keyCode === 13) {
    const text2 = inputElement2.value
    // 状態の更新 list: ["こんにちは"] -> ["こんにちは", "こんばんは"]
    list2.push(text2)
    localStorage.list2 = JSON.stringify(list2)

    // 状態の変化を画面に表示する
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text2
    container2.append(card)

    inputElement2.value = ""
  }
  return false
}

function test_ivent3(e) {
  if (e.keyCode === 13) {
    const text3 = inputElement3.value
    // 状態の更新 list: ["こんにちは"] -> ["こんにちは", "こんばんは"]
    list3.push(text3)
    localStorage.list3 = JSON.stringify(list3)

    // 状態の変化を画面に表示する
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text3
    container3.append(card)

    inputElement3.value = ""
  }
  return false
}
