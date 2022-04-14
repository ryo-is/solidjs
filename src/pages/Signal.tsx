import { createSignal, JSX } from 'solid-js';

export const Signal = (): JSX.Element => {
  const [count, setCount] = createSignal(0);

  setInterval(() => setCount(count() + 1), 1000);

  return <div class="p-4">Connt: {count()}</div>;
};
