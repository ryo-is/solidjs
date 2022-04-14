import type { Component } from 'solid-js';
import { Route, Routes } from 'solid-app-router';
import { Top } from '@pages/Top';
import { Signal } from '@pages/Signal';

import styles from './App.module.css';

export const App: Component = () => {
  return (
    <div class={styles.App}>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/signal" element={<Signal />} />
      </Routes>
    </div>
  );
};
