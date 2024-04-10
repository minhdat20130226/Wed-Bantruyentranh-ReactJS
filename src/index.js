import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutesHeader from './routes/RoutesHeader';
import "bootstrap-icons/font/bootstrap-icons.css";

class Root extends React.Component {

  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              {RoutesHeader.map((p, i) => (
                <Route key={i} path={p.path} target='' element={<p.component />} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
reportWebVitals();
