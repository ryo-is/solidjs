import { Component, createSignal, onCleanup } from 'solid-js';

export const Cleanup: Component = () => {
  const [count, setCount] = createSignal(0);

  const timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return <div class="p-4">Count: {count()}</div>;
};
