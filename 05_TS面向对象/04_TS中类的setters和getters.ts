class Person {
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  running() {
    console.log("running", this._name)
  }

  set name(newValue: string) {
    this._name = newValue
  }

  get name() {
    return this._name
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue
    }
  }

  get age() {
    return this._age
  }
}

const p = new Person("why", 18)

export {}
