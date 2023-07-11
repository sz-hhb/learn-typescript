class Person {
  constructor(
    public name: string,
    private _age: number,
    readonly height: number
  ) {}
}

const p = new Person("why", 18, 1.88)

console.log(p.name, p.height)
