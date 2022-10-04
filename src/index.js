import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import "./styles/styles.scss";
import Context from './context/Context';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Context>
      <App />
    </Context>
    {/* </Provider> */}
  </React.StrictMode>
);

