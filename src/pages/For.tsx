import { Component, createSignal, For, Index } from 'solid-js';

export const ForComponent: Component = () => {
  const [cats] = createSignal<{ id: string; name: string }[]>([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ]);

  return (
    <div class="p-4">
      <div>For</div>
      <ul>
        <For each={cats()}>
          {(cat, i) => <li>{`${i() + 1}: ${cat.name}`}</li>}
        </For>
      </ul>
      <div>Index</div>
      <ul>
        <Index each={cats()}>
          {(cat, i) => <li>{`${i + 1}: ${cat().name}`}</li>}
        </Index>
      </ul>
    </div>
  );
};
