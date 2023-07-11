//  1.对象中的函数中的this
const obj = {
  name: "why",
  studying: function () {
    console.log(this.name, "studying")
  }
}

obj.studying()

function foo() {
  console.log(this)
}

export {}
