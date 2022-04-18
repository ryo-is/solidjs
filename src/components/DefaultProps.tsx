import { Component, mergeProps } from 'solid-js';

export const DefaultProps: Component<{ greeting?: string; name?: string }> = (
  props
) => {
  const p = mergeProps({ greeting: 'Hi', name: 'John' }, props);

  return (
    <div>
      {p.greeting} {p.name}
    </div>
  );
};
