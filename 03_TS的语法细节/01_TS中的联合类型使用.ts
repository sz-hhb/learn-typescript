let foo: string | number = 123;

function printID(id: number | string) {
  if (typeof id === "number") {
    console.log(id);
  } else {
    console.log(id.length);
  }
}

printID(123);
printID("123");
