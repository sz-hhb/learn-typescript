class Person {
  readonly name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p = new Person("why", 18)
p.name = "1"
p.age = 18

export {}
