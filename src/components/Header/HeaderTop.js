import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.scss'
class HeaderTop extends Component {
    render() {
        return (
            <>
        <Navbar  data-bs-theme="dark" className="custom-navbar">
        <Container>
          <Nav className="left-headertop">
            <Link className="nav-link" to="/help"><i class="bi bi-info-circle"></i>Trợ giúp</Link>
            <Link className="nav-link" to="/news"><i class="bi bi-newspaper"></i>Tin tức</Link>
            <Link className="nav-link" to="/sell"><i class="bi bi-bookmarks"></i>Khuyến mãi</Link>
          </Nav>
          <Nav className="right-headertop ">
            <Link className="nav-link" to="/udti"><i class="bi bi-gift"></i>Ưu đãi tiện ích</Link>
            <Link className="nav-link" to="/checkorder"><i class="bi bi-box-seam"></i>Kiểm tra đơn hàng</Link>
            <Link className="nav-link" to="/login"><i class="bi bi-box-arrow-right"></i>Đăng nhập</Link>
            <Link className="nav-link" to="/register"><i class="bi bi-person-plus"></i>Đăng ký</Link>
          </Nav>
        </Container>
      </Navbar>
            </>
    
        );
      }
    }

export default HeaderTop;