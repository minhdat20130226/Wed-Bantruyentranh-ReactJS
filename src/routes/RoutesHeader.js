
import Help from '../containers/HeaderTop/Help';
import News from '../containers/HeaderTop/News';
import Sell from '../containers/HeaderTop/Sell';
import CheckOrder from '../containers/HeaderTop/CheckOrder';
import Login from '../containers/Auth/Login';
import Register from '../containers/Auth/Register';
import HomePage from '../containers/HomePage/HomePage';
import Cart from '../containers/HeaderCenter/Cart';
import { PATH } from '../utils/constant';
import QuestionTG from '../containers/HeaderBottom/QuestionTG';
import Promotionprogram from '../containers/HeaderBottom/Promotionprogram';
import SearchBookPage from '../containers/Product Search/SearchBookPage'; 
import Sale from '../containers/HeaderBottom/Sale';

 const  RoutesHeader = [
    { path: PATH.HOME, component: HomePage },
    { path: PATH.HELP, component: Help },
    { path: PATH.NEWS, component: News },
    { path: PATH.SELL, component: Sell },
    { path: PATH.CHECK_ORDER, component: CheckOrder },
    { path: PATH.LOGIN, component: Login },
    { path: PATH.REGISTER, component: Register },
    { path: PATH.CART, component: Cart },
    { path: PATH.QUESTIONTG, component: QuestionTG },
    { path: PATH.PROMOTIONPROGRAM, component: Promotionprogram },
    { path: PATH.SEARCHBOOKPAGE, component: SearchBookPage },
    { path: PATH.SEARCHBOOKPAGEGENRE, component: SearchBookPage },
    { path: PATH.SALE, component: Sale },
  ];

  export default RoutesHeader;

 
