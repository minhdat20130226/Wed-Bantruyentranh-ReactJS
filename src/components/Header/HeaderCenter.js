import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Header.scss'
import logo from '../../assets/logo-bookbuy.png';
import { PATH}  from '../../utils/constant';
class HeaderCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 'Tất cả'
    };
  }

  handleItemClick = (itemTitle) => {
    this.setState({ selectedItem: itemTitle });
  };

  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary header-search">
        <Container fluid>

          {/* Toggle button for collapsed nav */}
          <Navbar.Collapse id="navbarScroll">
            {/* Logo */}
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" height="30" />
            </Navbar.Brand>
            <div className='search'>
              <DropdownButton id="dropdown-basic-button" className='dropdown-search' title={this.state.selectedItem}>
                <Dropdown.Item onClick={() => this.handleItemClick('Action')}>Action</Dropdown.Item>
                <Dropdown.Item onClick={() => this.handleItemClick('Another action')}>Another action</Dropdown.Item>
                <Dropdown.Item onClick={() => this.handleItemClick('Something else')}>Something else</Dropdown.Item>
              </DropdownButton>
              {/* Search form */}
              <Form className="d-flex me-3 form-search">
                <FormControl type="search" placeholder="Bạn cần tìm gì?" className="search-input" aria-label="Search" />
                <Button className='btn-find' variant="outline-success">
                  <i class="bi bi-search"></i>
                </Button>
              </Form>
            </div>
            {/* Hotline */}
            <div className="hot-line">
              <i class="bi bi-headset"></i>
              <span className="">
                <p style={{color:"#eb7c26",fontWeight:700}}>0933 109 009</p>
                <p className="">Hot line</p>
              </span>
            </div>

            {/* Shopping cart */}
            <Nav className='catory'>
              <i className="bi bi-cart"></i>
              <Nav.Link href={PATH.CART}>Giỏ hàng
              <span style={{marginLeft:"5px"}}>(0)</span>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderCenter;