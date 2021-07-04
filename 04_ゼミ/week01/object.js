const ryuList = {
  name: "高木龍之介",
  age: 21,
  university: "中央大学",
  hobby: ["サーフィン", "テニス", "旅行"],
  familly: {
    papa: "よしき",
    mama: "キョーコ",
    brother: "りきや",
    sister: "あやな",
  },
  sayHello: function() {
    alert(`こんにちは${ryuList.name}です!!`)
  },
}

console.log(ryuList.name)
ryuList.sayHello()
