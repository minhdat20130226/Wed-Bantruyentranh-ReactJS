
import Help from '../containers/HeaderTop/Help';
import News from '../containers/HeaderTop/News';
import Sell from '../containers/HeaderTop/Sell';
import CheckOrder from '../containers/HeaderTop/CheckOrder';
import LoginPage from '../containers/Auth/LoginPage';
import RegisterPage from '../containers/Auth/RegisterPage';
import HomePage from '../containers/HomePage/HomePage';
import CartPage from '../containers/HeaderCenter/CartPage';
import { PATH } from '../utils/constant';
import QuestionTG from '../containers/HeaderBottom/QuestionTG';
import Promotionprogram from '../containers/HeaderBottom/Promotionprogram';
import SearchBookPage from '../containers/Product Search/SearchBookPage'; 
import Sale from '../containers/HeaderBottom/Sale';
import ProductsSearch from '../containers/Product Search/ProductsSearch';

 const  RoutesHeader = [
    { path: PATH.HOME, component: HomePage },
    { path: PATH.HELP, component: Help },
    { path: PATH.NEWS, component: News },
    { path: PATH.SELL, component: Sell },
    { path: PATH.CHECK_ORDER, component: CheckOrder },
    { path: PATH.LOGINPAGE, component: LoginPage },
    { path: PATH.REGISTERPAGE, component: RegisterPage },
    { path: PATH.CART, component: CartPage },
    { path: PATH.QUESTIONTG, component: QuestionTG },
    { path: PATH.PROMOTIONPROGRAM, component: Promotionprogram },
    { path: PATH.SEARCHBOOKPAGE, component: SearchBookPage },
    { path: PATH.PRODUCTS_SEARCH_SESSION, component: ProductsSearch },
    { path: PATH.PRODUCTS_SEARCH_SESSION_ITEM, component: ProductsSearch },
    { path: PATH.SALE, component: Sale },
  ];

  export default RoutesHeader;

 
