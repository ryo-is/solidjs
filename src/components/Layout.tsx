import { Component } from 'solid-js';

export const Layout: Component = (props) => {
  return (
    <div class="flex flex-col min-h-screen text-gray-200 bg-zinc-800">
      {props.children}
    </div>
  );
};
