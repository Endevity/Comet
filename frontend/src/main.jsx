import React from 'react';
import { createRoot } from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import App from './App';
import "./index.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="localhost:5173/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider> 
  </React.StrictMode>
);
