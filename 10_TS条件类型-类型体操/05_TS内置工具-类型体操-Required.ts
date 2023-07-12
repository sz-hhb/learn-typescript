interface IKun {
  name?: string
  age?: number
  slogan?: string
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}
type IKunRequired1 = MyRequired<IKun>
type IKunRequired2 = Required<IKun>

export {}
