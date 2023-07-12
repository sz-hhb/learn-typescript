interface IKun {
  name: string
  age: number
  slogan?: string
}

type MyPartial<T> = {
  [P in keyof T]?: T[P]
}
type IKunOptional = MyPartial<IKun>
// type IKunOptional = Partial<IKun>
