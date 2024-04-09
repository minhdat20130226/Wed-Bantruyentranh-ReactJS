import logo from './logo.svg';
import { Router,Route } from 'react-router-dom';
import './App.scss';
import { Fragment } from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Haeder';

function App() {
  return (
   <Fragment>
    <div className='header-container'>
      <Header/>
    </div>
    <div className='main-container'>
      <div className='sidenav-container'></div>
      <div className='app-container'>
         <Outlet/>
         </div>
    </div>
     
   </Fragment>
  );
}

export default App;
