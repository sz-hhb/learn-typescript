//  1.对象中的函数中的this
const obj = {
  name: "why",
  studying: function () {
    console.log(this.name, "studying")
  }
}

obj.studying()

function foo(this: { name: string }, info: { name: string }) {
  console.log(this)
}

foo.call({ name: "why" }, { name: "kk" })

export {}
