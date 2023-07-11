function foo(this: { name: string }, info: { name: string }) {
  console.log(this, info)
}

type FooType = typeof foo

type FooThisType = ThisParameterType<FooType>

type PureFooType = OmitThisParameter<FooType>

interface IState {
  name: string
  age: number
}

interface IStore {
  state: IState
  eating: () => void
  running: () => void
}

const store: IStore & ThisType<IState> = {
  state: {
    name: "why",
    age: 18
  },
  eating: function () {
    console.log(this.name)
  },
  running: function () {
    console.log(this.name)
  }
}

export {}
