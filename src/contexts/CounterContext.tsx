import {
  createSignal,
  createContext,
  useContext,
  Component,
  Accessor,
} from 'solid-js';

type ContextType = [Accessor<number>, { increment(): void; decrement(): void }];

const CounterContext = createContext<ContextType>([
  () => 0,
  {
    increment() {
      return;
    },
    decrement() {
      return;
    },
  },
]);

export const CounterProvider: Component = (props) => {
  const [count, setCount] = createSignal(0);
  const store: ContextType = [
    count,
    {
      increment() {
        setCount((c) => c + 1);
      },
      decrement() {
        setCount((c) => c - 1);
      },
    },
  ];

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};
