import { createSignal, Component, Switch, Match } from 'solid-js';

export const SwitchComponent: Component = () => {
  const [count, setCount] = createSignal(5);

  const countUp = () => setCount((c) => c + 1);
  const countDown = () => setCount((c) => c - 1);

  return (
    <div class="p-4">
      <Switch fallback={<div>{count()} is between 5 and 10</div>}>
        <Match when={count() > 10}>
          <div>{count()} is greater than 10</div>
        </Match>
        <Match when={count() < 5}>
          <div>{count()} is less than 5</div>
        </Match>
      </Switch>
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
