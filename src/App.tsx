import type { Component } from 'solid-js';
import { Route, Routes } from 'solid-app-router';
import { Top } from '@pages/Top';
import { Signal } from '@pages/Signal';
import { Effect } from '@pages/Effect';
import { Memo } from '@pages/Memo';
import { ShowComponent } from '@pages/Show';
import { ForComponent } from '@pages/For';
import { SwitchComponent } from '@pages/Switch';
import { DynamicComponent } from '@pages/Dynamic';
import { Mount } from '@pages/Mount';
import { Cleanup } from '@pages/Cleanup';
import { PropsComponent } from '@pages/Props';
import { Store } from '@pages/Store';
import { ContextComponent } from '@pages/Context';
import { ResourceComponent } from '@pages/Resource';

export const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/show" element={<ShowComponent />} />
        <Route path="/for" element={<ForComponent />} />
        <Route path="/switch" element={<SwitchComponent />} />
        <Route path="/dynamic" element={<DynamicComponent />} />
        <Route path="/mount" element={<Mount />} />
        <Route path="/cleanup" element={<Cleanup />} />
        <Route path="/props" element={<PropsComponent />} />
        <Route path="/store" element={<Store />} />
        <Route path="/context" element={<ContextComponent />} />
        <Route path="/resource" element={<ResourceComponent />} />
      </Routes>
    </div>
  );
};
