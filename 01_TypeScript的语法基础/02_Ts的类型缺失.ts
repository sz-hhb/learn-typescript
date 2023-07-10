function getLength(args: { length: number }) {
  return args.length;
}

getLength("aaaaa");
getLength(["abc", "cba", "nba"]);

export {};
