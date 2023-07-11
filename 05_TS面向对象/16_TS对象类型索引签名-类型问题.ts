interface IIndexType {
  // [index: number]: string
  // [index: string]: any
  [index: string]: string
}

const names: IIndexType = ["123", "231"]
// names["forEach"] => function
