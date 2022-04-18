import { Component, createSignal, For } from 'solid-js';
import { Dynamic } from 'solid-js/web';

const Red: Component = () => <div class="text-red-500 font-bold">Red</div>;
const Green: Component = () => (
  <div class="text-green-500 font-bold">Green</div>
);
const Blue: Component = () => <div class="text-blue-500 font-bold">Blue</div>;

const options = {
  red: Red,
  green: Green,
  blue: Blue,
};

export const DynamicContent: Component = () => {
  const [selected, setSelected] = createSignal<keyof typeof options>('red');

  return (
    <div class="p-4">
      <select
        value={selected()}
        onInput={(e) =>
          setSelected(e.currentTarget.value as keyof typeof options)
        }
        class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-zinc-800 mb-2"
      >
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>
      <Dynamic component={options[selected()]} />
    </div>
  );
};
