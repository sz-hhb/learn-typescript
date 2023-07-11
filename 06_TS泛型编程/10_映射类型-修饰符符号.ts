type MapIPerson<T> = {
  -readonly [property in keyof T]-?: T[property]
}

interface IPerson {
  name: string
  age?: number
  readonly height: number
  address?: string
}

type IPersonRequired = MapIPerson<IPerson>

export {}
