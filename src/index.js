import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import DataContextProvider from './context/DataContext';
import "./styles/styles.scss";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);

