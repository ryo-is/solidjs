/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import { CounterProvider } from '@contexts/CounterContext';

import './index.css';
import { App } from './App';
import { Layout } from '@components/Layout';

render(
  () => (
    <Router>
      <Layout>
        <CounterProvider>
          <App />
        </CounterProvider>
      </Layout>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
