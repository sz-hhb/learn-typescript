function getLength(arg: string): number
function getLength(arg: any[]): number
function getLength(arg: any): any {
  return arg.length
}

function getLength1(arg: string | any[]) {
  return arg.length
}

function getLength2(arg: { length: number }) {
  return arg.length
}
