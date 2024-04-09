import React, { Component }  from 'react';
import HeaderTop from './HeaderTop';
import HeaderCenter from './HeaderCenter';
import HeaderBottom from './HeaderBottom';

class Header extends Component {
    render() {

        return (
            <>
            <HeaderTop/>
            <HeaderCenter/>
            <HeaderBottom/>
            </>
    
        );
      }
    }

export default Header;