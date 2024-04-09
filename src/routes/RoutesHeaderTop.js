
import Help from '../containers/HeaderTop/Help';
import News from '../containers/HeaderTop/News';
import Sell from '../containers/HeaderTop/Sell';
import CheckOrder from '../containers/HeaderTop/CheckOrder';
import Login from '../containers/Auth/Login';
import Register from '../containers/Auth/Register';


 const  RoutesHeaderTop = [
    { path: '/help', component: Help },
    { path: '/news', component: News },
    { path: '/sell', component: Sell },
    { path: '/checkorder', component: CheckOrder },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ];

  export default RoutesHeaderTop;

 
