import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import PromptDisplay from './components/PromptDisplay.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prompt" element={<PromptDisplay />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
