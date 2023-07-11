interface IBar {
  name: string
  age: 18
  (num1: number): number
}

const bar = (num1: number): number => {
  return 123
}

bar.name = "aaa"
bar.age = 18
bar(123)

export {}
