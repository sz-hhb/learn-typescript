type IKun = "sing" | "dance" | "rap" | null | undefined

type MyNonNullable<T> = T extends null | undefined ? never : T

type IKun1 = NonNullable<IKun>
type IKun2 = MyNonNullable<IKun>

export {}
