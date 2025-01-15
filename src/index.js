import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Posts from './pages/Posts';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className='pages-container'>
      <Posts />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
