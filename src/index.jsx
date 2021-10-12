import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'antd/dist/antd.css';
import { ThemeContextProvider } from './context/theme-context/ThemeContext';


 ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
document.getElementById('root'));
