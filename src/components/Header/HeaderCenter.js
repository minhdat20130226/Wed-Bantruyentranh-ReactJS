import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Header.scss'
import logo from '../../assets/logo-bookbuy.png';
import { PATH } from '../../utils/constant';

import categoryService from '../../servieces/categoryService';
class HeaderCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 'Tất cả',
      genresName: []
    };
  }

  handleItemClick = (itemTitle) => {
    this.setState({ selectedItem: itemTitle });
  };

    async componentDidMount() {
    try {
        const responseData = await categoryService.getGenresName();
        this.setState({ genresName: responseData });
    } catch (error) {
        console.error('Service Error:', error);
    }
}
  render() {
    
    console.log(this.state.genresName)
    return (
      <Navbar expand="lg" className="bg-body-tertiary header-search">
        <Container >

          {/* Toggle button for collapsed nav */}
          <Navbar.Collapse id="navbarScroll">
            {/* Logo */}
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" height="30" />
            </Navbar.Brand>
            <div className='search'>
              <DropdownButton id="dropdown-button-genres-find" className='dropdown-search' title={this.state.selectedItem}>
                <Dropdown.Item onClick={() => this.handleItemClick('Tất cả')}>Tất cả</Dropdown.Item>

                {Array.isArray(this.state.genresName) && this.state.genresName.map((genre, index) => (
                  <Dropdown.Item key={index} onClick={() => this.handleItemClick(genre)}>
                    {genre}
                  </Dropdown.Item>
                ))} 
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
                <p className='txt-phone' style={{ color: "#eb7c26", fontWeight: 700 }}>0933 109 009</p>
                <p className="">Hot line</p>
              </span>
            </div>

            {/* Shopping cart */}
            <Nav className='catory'>
              <i className="bi bi-cart"></i>
              <Nav.Link href={PATH.CART}>Giỏ hàng
                <span style={{ marginLeft: "5px" }}>(0)</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderCenter;