interface IIndexType {
  [bbb: string]: any
}

const nums: IIndexType = ["abc", "cba", "nba"]
console.log(nums[0])
