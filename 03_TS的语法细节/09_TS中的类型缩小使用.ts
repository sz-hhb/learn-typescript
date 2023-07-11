// 1. typeof
function printID(id: number | string) {
  if (typeof id === "string") {
    console.log(id.length)
  }
}

// 2. 方向的类型判断
type Direction = "left" | "right" | "up" | "down"
function switchDirection(direction: Direction) {
  if (direction === "left") {
    console.log(direction, "left")
  } else if (direction === "right") {
    console.log(direction, "right")
  } else if (direction === "up") {
    console.log(direction, "up")
  } else if (direction === "down") {
    console.log(direction, "down")
  }
}

// 3. instanceof
function printDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.getTime())
  } else {
    console.log(date)
  }
}

// 4. in操作符
interface ISwim {
  swim: () => void
}

interface IRun {
  run: () => void
}

function move(animal: ISwim | IRun) {
  if ("swim" in animal) {
    animal.swim()
  } else if ("run" in animal) {
    animal.run()
  }
}

const fish: ISwim = {
  swim: function () {}
}

const dog: IRun = {
  run: function () {}
}

move(fish)
move(dog)
