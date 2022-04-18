import type { Component } from 'solid-js';
import { Route, Routes } from 'solid-app-router';
import { Top } from '@pages/Top';
import { Signal } from '@pages/Signal';
import { Effect } from '@pages/Effect';
import { Memo } from '@pages/Memo';

export const App: Component = () => {
  return (
    <div class="flex flex-col min-h-screen text-gray-200 bg-zinc-800">
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </div>
  );
};
