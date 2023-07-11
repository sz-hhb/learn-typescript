interface IPerson {
  name: string
  age: number
  friend?: {
    name: string
  }
}

const info: IPerson = {
  name: "why",
  age: 18
}

// 访问属性
console.log(info.friend?.name)

// 属性赋值
info.friend!.name = "ccc" // (确保有值才使用)

if (info.friend) {
  info.friend.name = "cccc"
}
