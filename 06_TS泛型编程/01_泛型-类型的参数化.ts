function foo<T>(arg: T): T {
  return arg
}

const res1 = foo<number>(111)
const res2 = foo("1111")
const res3 = foo({ name: "why" })
