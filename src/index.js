import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutesHeaderTop from './routes/RoutesHeaderTop';
import "bootstrap-icons/font/bootstrap-icons.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>  
          {RoutesHeaderTop.map((p,i) => (
        <Route path={p.path} element={<p.component />} />
      ))}
            </Route>
  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
