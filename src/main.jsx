import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ProductProvider from './context/ProductContext'
import SidebarContext from './context/SidebarContext'

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarContext>
  <ProductProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ProductProvider>
  </SidebarContext>
);
