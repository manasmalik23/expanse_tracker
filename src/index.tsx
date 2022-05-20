import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/index';
import ReactDOM from 'react-dom';


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

