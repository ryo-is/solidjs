import type { Component } from 'solid-js';

import logo from '../logo.svg';

export const Top: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center text-3xl">
      <img class="h-96 mb-4" src={logo} alt="logo" />
      <div class="">
        Edit <code>src/App.tsx</code> and save to reload.
      </div>
      <a
        class="text-purple-700 underline"
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solid
      </a>
    </div>
  );
};
