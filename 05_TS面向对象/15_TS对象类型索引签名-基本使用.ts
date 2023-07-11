interface ICollection {
  [index: number]: string
  length: number
}

function printCollection(collection: ICollection) {
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]
    console.log(item)
  }
}

const array = ["abc", "cba", "nba"]
const tuple: [string, string] = ["why", "广州"]

printCollection(array)
printCollection(tuple)
