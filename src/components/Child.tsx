import { Component } from 'solid-js';

export const Child: Component<{ greeting: string; name: string }> = (props) => {
  return (
    <div>
      {props.greeting || 'Hi'} {props.name || 'John'}
    </div>
  );
};
