class Person {}

const name: string = "aaa"
const p: Person = new Person()
function printPerson(p: Person) {}

function factory(ctor: new () => void) {}
factory(Person)

export {}
