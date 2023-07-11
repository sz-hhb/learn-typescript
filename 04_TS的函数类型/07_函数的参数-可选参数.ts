function foo(x: number, y?: number) {
  if (y !== undefined) console.log(y)
}

foo(10)
foo(20)
