abstract class Shape {
  abstract getArea()
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  getArea() {
    return this.radius ** 2 * Math.PI
  }
}

class Triangle extends Shape {
  constructor() {
    super()
  }

  getArea() {
    return 100
  }
}

function calcArea(shape: Shape) {
  return shape.getArea()
}

calcArea(new Rectangle(10, 20))
calcArea(new Circle(5))
calcArea(new Triangle())
