import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { PATH } from '../../utils/constant';
import './Header.scss';

class HeaderTop extends Component {
  render() {
    const { isSticky } = this.props;

    return (
      <>
        <Navbar data-bs-theme="dark" className={`custom-navbar header-top ${isSticky ? '' : 'fixed-top'}`}>
          <Container>
            <Nav className="left-headertop">
              <Link className="nav-link" to={PATH.HELP}><i className="bi bi-info-circle"></i>Trợ giúp</Link>
              {
                !isSticky ?
                  <>
                    <Form className="d-flex me-3 form-search form-search-top">
                      <FormControl type="search" placeholder="Bạn cần tìm gì?" className="search-input" aria-label="Search" />
                      <Button className='btn-find' variant="outline-success">
                        <i class="bi bi-search"></i>
                      </Button>
                    </Form>
                  </>
                  :
                  <>
                    <Link className="nav-link" to={PATH.NEWS}><i className="bi bi-newspaper"></i>Tin tức</Link>
                    <Link className="nav-link" to={PATH.SELL}><i className="bi bi-bookmarks"></i>Khuyến mãi</Link>
                   

                  </>

              }

            </Nav>
            <Nav className="right-headertop">
              <Link className="nav-link" to={PATH.UDTI}><i className="bi bi-gift"></i>Ưu đãi tiện ích</Link>
              <Link className="nav-link" to={PATH.CHECK_ORDER}><i className="bi bi-box-seam"></i>Kiểm tra đơn hàng</Link>
              <Link className="nav-link" to={PATH.LOGIN}><i className="bi bi-box-arrow-right"></i>Đăng nhập</Link>
              <Link className="nav-link" to={PATH.REGISTER}><i className="bi bi-person-plus"></i>Đăng ký</Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default HeaderTop;
