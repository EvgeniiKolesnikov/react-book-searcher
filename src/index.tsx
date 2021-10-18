import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
