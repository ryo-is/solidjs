import { Component, children, createEffect, JSX } from 'solid-js';
import { ResolvedJSXElement } from 'solid-js/types/reactive/signal';

export const Child: Component<{ color: string }> = (props) => {
  const c = children(() => props.children);

  createEffect(() =>
    (c() as ResolvedJSXElement[]).forEach((item) => {
      if (!item) return;
      (item as JSX.CSSProperties).style.color = props.color;
    })
  );

  return <div>{c()}</div>;
};
