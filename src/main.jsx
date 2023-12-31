import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import{
RouterProvider,
} from "react-router-dom";
import MainRouter from './router/MainRouter';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRouter}/>
    </AuthProvider>
  </React.StrictMode>,
)
