type MapPerson<T> = {
  [property in keyof T]: T[property]
}

interface IPerson {
  name: string
  age: number
}

type NewPerson = MapPerson<IPerson>

export {}
