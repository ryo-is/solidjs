import {
  createSignal,
  Component,
  createEffect,
  createRenderEffect,
} from 'solid-js';

export const Effect: Component = () => {
  console.log('rendering');
  const [count, setCount] = createSignal(0);
  const [count2, setCount2] = createSignal(10);

  const countUp = () => setCount((c) => c + 1);
  const countDown = () => setCount((c) => c - 1);

  createEffect(() => {
    console.log('createEffect', 'The count is now', count());
  });

  createRenderEffect(() => {
    setCount2(100);
    console.log('createRenderEffect', 'The count is now', count2());
  });

  return (
    <div class="p-4">
      <div class="">Connt: {count()}</div>
      <div class="">Connt: {count2()}</div>
      <button class="btn btn-primary text-gray-200 mt-2 mr-2" onClick={countUp}>
        +1
      </button>
      <button class="btn btn-error  text-gray-200 mt-2" onClick={countDown}>
        -1
      </button>
    </div>
  );
};
