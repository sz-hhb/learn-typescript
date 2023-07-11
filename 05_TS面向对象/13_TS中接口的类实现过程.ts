interface IKun {
  name: string
  age: number
  slogan: string
  playBasketball: () => void
}

const ikun: IKun = {
  name: "",
  age: 18,
  slogan: "",
  playBasketball() {}
}

class Person implements IKun {
  name: string
  age: number
  slogan: string
  playBasketball: () => void
}

const ikun1 = new Person()
