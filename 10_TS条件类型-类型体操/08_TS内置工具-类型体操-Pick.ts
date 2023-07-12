interface IKun {
  name: string
  age: number
  slogan?: string
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type IKun1 = Pick<IKun, "name" | "slogan">
type IKun2 = MyPick<IKun, "name" | "slogan">

export {}
