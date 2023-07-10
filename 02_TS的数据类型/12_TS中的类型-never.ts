// function foo(): never {
//   // while (true) {}
//   // throw new Error("1233");
// }

// foo();

function parseLyric() {
  return [];
}

function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case "string":
      console.log(message.length);
      break;
    case "number":
      console.log(message);
      break;
    case "boolean":
      console.log(Number(message));
      break;
    default:
      const check: never = message;
  }
}

handleMessage("123");
handleMessage(123);
handleMessage(true);

export {};
