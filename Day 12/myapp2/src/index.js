import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header';

import App from './App';
import TimeTable from './Component/TT';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimeTable />
    <Header/>
    <App />
  </React.StrictMode>
);
