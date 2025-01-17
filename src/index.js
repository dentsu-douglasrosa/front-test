import React from 'react';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n';

reportWebVitals(sendToVercelAnalytics);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);