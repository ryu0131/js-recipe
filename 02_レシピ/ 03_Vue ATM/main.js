new Vue({
  el: "#ATMapp",
  data: {
    a: 0,
    b: 0,
    inputValue: "",
    type: "",
    date: new Date(),
    logs: [],
  },
  methods: {
    payment: function() {
      this.b = Number(this.inputValue)
      this.a += this.b
      this.inputValue = ""
      this.type = "入金"
    },
    pay: function() {
      this.b = Number(this.inputValue)
      this.a -= this.b
      this.inputValue = ""
      this.type = "出金"
    },
  },
})
