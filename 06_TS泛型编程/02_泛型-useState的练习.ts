function useState<T>(initialState: T): [T, (newValue: T) => void] {
  let state = initialState
  function setState(newValue: T) {
    state = newValue
  }

  return [state, setState]
}

const [count, setCount] = useState(100)
const [message, setMessage] = useState("123")
const [banners, setBanners] = useState<any[]>([])

export {}
