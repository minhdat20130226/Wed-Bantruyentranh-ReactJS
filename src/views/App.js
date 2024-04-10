
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
      <Outlet/>
      <div className='sidenav-container'></div>
      <div className='app-container'>
         
         </div>
    </div>
     
   </Fragment>
  );
}

export default App;
