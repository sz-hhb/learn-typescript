interface ICollection {
  // 索引签名
  [index: number]: string

  length: number
}

function iteratorCollection(collection: ICollection) {
  console.log(collection[0])
}
