type MapIPerson<T> = {
  readonly [property in keyof T]?: T[property]
}

interface IPerson {
  name: string
  age: number
  height: number
  address: string
}

type IPersonOptional = MapIPerson<IPerson>

export {}
