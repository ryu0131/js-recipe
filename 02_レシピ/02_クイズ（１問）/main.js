const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")
const nextButton = document.getElementById("next-quiz")
const container = document.getElementById("choices-container")
let count = Math.floor(Math.random() * 3)

// クイズの内容
const quiz = {
  text: "この城の名前は何でしょう？",
  image: "maruoka.png",
  choices: [
    {
      text: "松本城",
      feedback: "残",
    },
    {
      text: "大阪城",
      feedback: "念",
    },
    {
      text: "熊本城",
      feedback: "です",
    },
  ],
}

const quiz2 = {
  text: "何なら勝てる？",
  image: "Two.jpeg",
  choices: [
    {
      text: "グー",
      feedback: "正解！",
    },
    {
      text: "パー",
      feedback: "残念！。",
    },
    {
      text: "チョキ",
      feedback: "残念！",
    },
  ],
}

const quiz3 = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

const list = [quiz, quiz2, quiz3]

const buttonCreate = function(a) {
  for (let i = 0; i < list[a].choices.length; i++) {
    const card = document.createElement("button")
    card.id = "choice" + i
    card.textContent = list[a].choices[i].text
    container.append(card)
    console.log(i)
  }
  const div1 = document.getElementById("choice0")
  const div2 = document.getElementById("choice1")
  const div3 = document.getElementById("choice2")
  div1.onclick = function() {
    choose(0, count)
  }
  div2.onclick = function() {
    choose(1, count)
  }
  div3.onclick = function() {
    choose(2, count)
  }
}

const reloadQuiz = function(a) {
  quizText.textContent = list[a].text + quiz3.choices.length
  quizImage.src = "./images/" + list[a].image
}

const choose = function(number, n) {
  feedback.textContent = list[n].choices[number].feedback
}
buttonCreate(count)

nextButton.onclick = function() {
  count = Math.floor(Math.random() * 3)
  feedback.textContent = ""
  reloadQuiz(count)
  const div1 = document.getElementById("choice0")
  const div2 = document.getElementById("choice1")
  const div3 = document.getElementById("choice2")
  div1.remove()
  div2.remove()
  div3.remove()
  buttonCreate(count)
}

reloadQuiz(count)
