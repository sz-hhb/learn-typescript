interface IKun<T = string> {
  name: T
  age: number
  slogan: T
}

const kunkun: IKun<string> = {
  name: "why",
  age: 18,
  slogan: "hhh"
}
