import { Component, createSignal, For } from 'solid-js';

export const ForContent: Component = () => {
  const [cats] = createSignal<{ id: string; name: string }[]>([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ]);

  return (
    <div class="p-4">
      <ul>
        <For each={cats()}>
          {(cat, i) => <li>{`${i() + 1}: ${cat.name}`}</li>}
        </For>
      </ul>
    </div>
  );
};
