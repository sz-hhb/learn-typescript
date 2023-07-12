type IDType = number | string

type ResType = number extends IDType ? true : false

function sum<T extends number | string>(
  num1: T,
  num2: T
): T extends number ? number : string
function sum(num1: any, num2: any) {
  return num1 + num2
}

const res = sum(10, 20)

export {}
