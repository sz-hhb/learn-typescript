class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p1 = new Person("why", 18)
const p2 = new Person("hhh", 20)

console.log(p1.name, p1.age)
console.log(p2.name, p2.age)

export {}
