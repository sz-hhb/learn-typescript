const name = "why"

type Direction = "left" | "right" | "up" | "down"
const d1: Direction = "left"

type MethodType = "get" | "post"
function request(url: string, method: MethodType) {}

request("http://xxx/api", "get")

const info: { url: string; method: MethodType } = {
  url: "xxx",
  method: "post"
}

const info2 = {
  url: "xxx",
  method: "post"
} as const

// request(info.url, info.method as "post")
request(info.url, info.method)
request(info2.url, info2.method)

export {}
