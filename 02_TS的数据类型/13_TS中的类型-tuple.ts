// 元组类型
const info3: [string, number, number] = ["why", 18, 1.88];

function useState(initialState: number): [number, (newValue: number) => void] {
  let stateValue = initialState;
  function setValue(newValue: number) {
    stateValue = newValue;
  }

  return [stateValue, setValue];
}

const [count, setCount] = useState(10);
