type CalcFnType = (num1: number, num2: number) => number

function foo() {
  return "abc"
}

type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never

type MyParameterType<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never

type CalcReturnType = MyReturnType<CalcFnType>
type FooReturnType = MyReturnType<typeof foo>

type CalcParameterType = MyParameterType<CalcFnType>
