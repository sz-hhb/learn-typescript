interface IKun {
  name: string
  age: number
  slogan?: string
}

type keys = keyof IKun
type res = keyof any

type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

type t1 = "上海" | "北京" | "洛杉矶"
type IKun1 = Record<t1, IKun>
type IKun2 = MyRecord<t1, IKun>

export {}
