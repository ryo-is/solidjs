import { Component, createSignal, For } from 'solid-js';
import { Child } from '@components/Child';
import { DefaultProps } from '@components/DefaultProps';
import { SplitProps } from '@components/SplitProps';

export const PropsContent: Component = () => {
  const [name] = createSignal('Taro');
  const [color, setColor] = createSignal('purple');

  return (
    <div class="p-4">
      <DefaultProps />
      <SplitProps greeting="Hello" name={name()} class="text-red-500" />
      <Child color={color()}>
        <For each={['Most', 'Interesting', 'Thing']}>
          {(item) => <div>{item}</div>}
        </For>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded mt-2 mr-2"
          onClick={() => setColor('teal')}
        >
          Set Color
        </button>
      </Child>
    </div>
  );
};
