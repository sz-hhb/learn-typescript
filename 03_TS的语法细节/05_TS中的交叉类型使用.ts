// 联合类型
type ID = number | string

// 交叉类型
interface IKun {
  name: string
  age: number
}

interface ICoder {
  name: string
  coding: () => void
}

const info: IKun & ICoder = {
  name: "hhb",
  age: 18,
  coding: function () {
    console.log("coding")
  }
}
