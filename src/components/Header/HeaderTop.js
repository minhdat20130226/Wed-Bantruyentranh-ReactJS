import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PATH } from '../../utils/constant';
import './Header.scss'

class HeaderTop extends Component {
    render() {
        return (
            <>
        <Navbar  data-bs-theme="dark" className="custom-navbar">
        <Container>
          <Nav className="left-headertop">
            <Link className="nav-link" to={PATH.HELP}><i class="bi bi-info-circle"></i>Trợ giúp</Link>
            <Link className="nav-link" to={PATH.NEWS}><i class="bi bi-newspaper"></i>Tin tức</Link>
            <Link className="nav-link" to={PATH.SELL}><i class="bi bi-bookmarks"></i>Khuyến mãi</Link>
          </Nav>
          <Nav className="right-headertop ">
            <Link className="nav-link" to={PATH.UDTI}><i class="bi bi-gift"></i>Ưu đãi tiện ích</Link>
            <Link className="nav-link" to={PATH.CHECK_ORDER}><i class="bi bi-box-seam"></i>Kiểm tra đơn hàng</Link>
            <Link className="nav-link" to={PATH.LOGIN}><i class="bi bi-box-arrow-right"></i>Đăng nhập</Link>
            <Link className="nav-link" to={PATH.REGISTER}><i class="bi bi-person-plus"></i>Đăng ký</Link>
          </Nav>
        </Container>
      </Navbar>
            </>
    
        );
      }
    }

export default HeaderTop;