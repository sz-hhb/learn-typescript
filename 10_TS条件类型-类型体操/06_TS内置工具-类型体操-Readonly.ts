interface IKun {
  name: string
  age: number
  slogan?: string
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
type IKun1 = MyReadonly<IKun>
type IKun2 = Readonly<IKun>

export {}
