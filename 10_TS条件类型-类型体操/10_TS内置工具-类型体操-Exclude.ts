type IKun = "sing" | "dance" | "rap"

type MyExclude<T, E> = T extends E ? never : T

type IKun1 = Exclude<IKun, "rap">
type IKun2 = MyExclude<IKun, "rap">

export {}
