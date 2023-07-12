type IKun = "sing" | "dance" | "rap"

type MyExtract<T, E> = T extends E ? T : never

type IKun1 = Extract<IKun, "rap">
type IKun2 = MyExtract<IKun, "rap">

export {}
