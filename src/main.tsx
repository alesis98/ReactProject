import '@ui5/webcomponents-react/dist/Assets.js';
import App from './App.tsx';
import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Fatturazione from "./pages/Fatturazione.tsx";
import Rifornimenti from "./pages/Rifornimenti.tsx";
import {createRoot} from 'react-dom/client';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/fatturazione",
    element: <Fatturazione></Fatturazione>
  },
  {
    path: "/rifornimenti",
    element: <Rifornimenti></Rifornimenti>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>
);
