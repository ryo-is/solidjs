import { createSignal, Component } from 'solid-js';

export const Signal: Component = () => {
  const [count, setCount] = createSignal(0);

  const countUp = () => setCount((c) => c + 1);
  const countDown = () => setCount((c) => c - 1);

  return (
    <div class="p-4">
      <div class="">Connt: {count()}</div>
      <button
        class="bg-blue-600 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded mt-2 mr-2"
        onClick={countUp}
      >
        +1
      </button>
      <button
        class="bg-red-600 hover:bg-red-700 text-gray-200 py-2 px-4 rounded mt-2"
        onClick={countDown}
      >
        -1
      </button>
    </div>
  );
};
