interface IKun {
  name: string
  age: number
}

type IKunType = keyof IKun // "name" | "age"

function getObjProperty<O, T extends keyof O>(obj: O, key: T) {
  return obj[key]
}

const info = {
  name: "why",
  age: 18,
  height: 1.88
}

getObjProperty(info, "name")
