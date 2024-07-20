import React from 'react';
import WebApp from "@twa-dev/sdk";
import { createRoot } from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import App from './App';
import "./index.css";

WebApp.ready();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="http://192.168.0.124:5173/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider> 
  </React.StrictMode>
);