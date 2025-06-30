import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SnackbarProvider } from 'notistack'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={2}
      preventDuplicate={true}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <Provider store={store}>
        <RouterProvider
          router={router}
          future={{ v7_startTransition: true }}
        />
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>
);
