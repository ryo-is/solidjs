import { Component, children } from 'solid-js';

export const Layout: Component = (props) => {
  const c = children(() => props.children);

  return (
    <div class="flex flex-col min-h-screen text-gray-200 bg-zinc-800">
      {c()}
    </div>
  );
};
