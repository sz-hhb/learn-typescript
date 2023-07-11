type IDType = number | string;

function printID(id: IDType) {
  if (typeof id === "number") {
    console.log(id);
  } else {
    console.log(id.length);
  }
}

export {};
