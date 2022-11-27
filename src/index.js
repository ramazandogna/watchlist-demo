import App from './App';
import { GlobalProvider } from './context/GlobalState';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <GlobalProvider>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </GlobalProvider>
);
