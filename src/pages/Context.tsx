import { Component } from 'solid-js';
import { useCounter } from '@contexts/CounterContext';

export const ContextComponent: Component = () => {
  const [count, { increment, decrement }] = useCounter();

  return (
    <div class="p-4">
      <div>{count()}</div>
      <button
        class="bg-blue-600 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded mt-2 mr-2"
        onClick={() => increment()}
      >
        increment
      </button>
      <button
        class="bg-red-600 hover:bg-red-700 text-gray-200 py-2 px-4 rounded mt-2 mr-2"
        onClick={() => decrement()}
      >
        decrement
      </button>
    </div>
  );
};
