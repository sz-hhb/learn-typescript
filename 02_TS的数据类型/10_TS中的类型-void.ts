function sum(num1: number, num2: number): void {
  console.log(num1 + num2);
}

type FooType = () => void;
const foo: FooType = () => {};

type ExecFnType = (...args: any[]) => void;
function delayExecFn(fn: ExecFnType) {
  setTimeout(() => {
    fn("why", 18);
  }, 1000);
}

delayExecFn((name, age) => {
  console.log(name, age);
});

export {};
