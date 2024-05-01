
import './App.scss';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Haeder';
import Footer from '../components/Footer/Footer';
function App() {
  return (
    <Fragment>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <Outlet />
        <div className='sidenav-container'></div>
        <div className='app-container'>
        </div>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
