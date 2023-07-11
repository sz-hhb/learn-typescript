interface ILength {
  length: number
}

function getLength(arg: ILength) {
  return arg.length
}

const length1 = getLength("aaaa")
const length2 = getLength(["aaa", "bbb", "ccc"])
const length3 = getLength({ length: 100 })

function getInfo<T extends ILength>(args: T): T {
  return args
}

const info1 = getInfo("aaa")
const info2 = getInfo(["aaa", "bbb", "ccc"])
const info3 = getInfo({ length: 100 })
