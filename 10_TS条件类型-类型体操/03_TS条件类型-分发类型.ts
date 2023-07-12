type toArray<T> = T extends any ? T[] : never

type NumArray = toArray<number>

type NumAndStrArray = toArray<number | string>
