import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const eatMore = () => {
//   setBananas((bananas) => {
//       const modifiedValue = bananas + 1;
//       console.log(modifiedValue);
//       return modifiedValue;
//   });
// };

// (bananas) => {
//   const modifiedValue = bananas + 1;
//   console.log(modifiedValue);
//   return modifiedValue;
// }
