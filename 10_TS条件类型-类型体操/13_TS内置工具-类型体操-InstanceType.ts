class Person {}
class Dog {}

type HYInstanceType<T extends new (...args: any[]) => any> = T extends new (
  ...args: any[]
) => infer R
  ? R
  : never

const p1: Person = new Person()

// typeof Person: 构造函数具体的类型
// InstanceType: 构造函数创建出来的实例对象的类型
type HYPerson = InstanceType<typeof Person>
type HYPerson1 = HYInstanceType<typeof Person>
const p2: HYPerson = new Person()

function factory<T extends new (...args: any[]) => any>(
  ctor: T
): InstanceType<T> {
  return new ctor()
}

const p3 = factory(Person)
