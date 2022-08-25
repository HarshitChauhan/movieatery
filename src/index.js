import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import store from './app/store';
import ToggleThemeModeProvider from './utils/ToggleThemeMode'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleThemeModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleThemeModeProvider>
    </Provider>
  </React.StrictMode>,
);
