import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, } from 'react-router'
import {BrowserRouter} from 'react-router-dom'

import App from './App';
import reportWebVitals from './reportWebVitals';
import Create from './components/create';
import Edit from './components/edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<App/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/page/:pagenum' element={<App/>}/>
        <Route path='/search/:key' element={<App/>}/>
 
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
