import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.tsx';
import configureStore from './app/store.ts';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider store={configureStore}>
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  console.error('Failed to render the root element');
}
