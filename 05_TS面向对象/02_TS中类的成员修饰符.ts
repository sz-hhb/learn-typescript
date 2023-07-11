class Person {
  protected name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  private eating() {
    console.log("eating", this.name, this.age)
  }
}

const p1 = new Person("why", 18)
const p2 = new Person("hhh", 20)

console.log(p1.name, p1.age)
console.log(p2.name, p2.age)

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  studying() {
    console.log("studying", this.name)
  }
}

const s1 = new Student("why", 18)
console.log(s1.name)

export {}
