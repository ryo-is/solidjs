import { Component, createSignal } from 'solid-js';
import { Child } from '@components/Child';
import { DefaultProps } from '@components/DefaultProps';
import { SplitProps } from '@components/SplitProps';

export const PropsContent: Component = () => {
  const [name] = createSignal('Taro');

  return (
    <div class="p-4">
      <Child greeting="Hello" name={name()} />
      <DefaultProps />
      <SplitProps greeting="Hello" name={name()} class="text-red-500" />
    </div>
  );
};
