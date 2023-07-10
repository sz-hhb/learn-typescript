let foo: unknown = "aaa";
foo = 123;

if (typeof foo === "string") {
  console.log(foo.length);
}

export {};  
