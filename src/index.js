import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import "./cssFiles/Fontiran.css";
import "./cssFiles/MainStyle.css";
import "./cssFiles/Reset.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProvider 
      lang="fa"
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">

    <App />
  </ThemeProvider>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 