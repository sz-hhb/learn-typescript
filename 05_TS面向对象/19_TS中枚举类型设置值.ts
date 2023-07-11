enum Direction {
  LEFT = 0,
  RIGHT = 1,
  TOP,
  BOTTOM
}

enum Operation {
  Read = 1 << 0,
  Write = 1 << 1,
  foo = 1 << 2
}

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      break
  }
}

turnDirection(Direction.LEFT)

export {}
