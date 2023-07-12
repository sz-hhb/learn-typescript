interface IKun {
  name: string
  age: number
  slogan?: string
}

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type IKun1 = Omit<IKun, "name" | "slogan">
type IKun2 = MyOmit<IKun, "name" | "slogan">

export {}
