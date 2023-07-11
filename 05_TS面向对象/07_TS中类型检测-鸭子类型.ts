class Person {
  constructor(public name: string, public age: number) {}
}

class Dog {
  constructor(public name: string, public age: number) {}
}

// 鸭子类型
const p: Person = new Dog("123", 123)
