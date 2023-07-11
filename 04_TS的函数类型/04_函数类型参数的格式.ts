type calcFnType = (num1: number, num2: number) => number

function calc(calcFn: calcFnType) {
  calcFn(10, 20)
}

calc(function (num1, num2) {
  return 123
})

export {}
