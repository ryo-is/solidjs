import { Component, splitProps } from 'solid-js';

export const SplitProps: Component<{
  greeting: string;
  name: string;
  [k: string]: string;
}> = (props) => {
  const [local, others] = splitProps(props, ['greeting', 'name']);

  return (
    <div {...others}>
      {local.greeting} {local.name}
    </div>
  );
};
