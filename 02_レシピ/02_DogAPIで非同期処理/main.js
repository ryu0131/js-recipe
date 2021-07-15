const changeButton = document.getElementById("change-button")
const count = document.getElementById("count-text")
const container = document.getElementById("container")
const select = document.getElementById("select-name")

// 犬種を判別して検索
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    const b = Object.keys(data.message).length
    for (let i = 0; i < b; i++) {
      const option = document.createElement("option")
      option.textContent = Object.keys(data.message)[i]
      select.append(option)
    }
  })

changeButton.onclick = function() {
  while (container.lastChild) {
    container.removeChild(container.lastChild)
  }
  // 指定したサーバーにデータを取りに行く
  fetch(
    "https://dog.ceo/api/breed/" +
      select.value +
      "/images/random/" +
      count.value,
  )
    .then((res) => {
      return res.json() // 結果を json として読み込んで、次の then に渡す
    })
    .then((data) => {
      console.dir(data)
      const c = Number(count.value)
      for (let i = 0; i < c; i++) {
        const image = document.createElement("img")
        image.src = data.message[i]
        container.append(image)
      }
    })
}
