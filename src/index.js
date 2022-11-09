import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from "react-router-dom"
import CreateInvoice from './Pages/CreateInvoice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="createinvoice" element={<CreateInvoice  />} />
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);


