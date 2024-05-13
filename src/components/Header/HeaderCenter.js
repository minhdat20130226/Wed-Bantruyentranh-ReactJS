import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button, ListGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Header.scss'
import logo from '../../assets/logo-bookbuy.png';
import { PATH } from '../../utils/constant';
import SearchBookService from '../../servieces/SearchBookService';
import categoryService from '../../servieces/categoryService';
import CardProductSearch from '../CardProductSearch.';
import Utils from '../../constant/Utils';

class HeaderCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genresFind: 'Tất cả',
      valueFind: null,
      genresName: null,
      dataInfoSearch: null,
    };
  }

  handleGenresNameClick = (itemTitle) => {
    this.setState({ genresFind: itemTitle });
  }

  handleValueFindClick = (event) => {
    const valueFind = event.target.value.trim();
    this.setState({ valueFind });
    this.fetchInfoSearch(this.state.genresFind, valueFind);
    console.log('dataInfoSearch',valueFind)
  }

  componentDidMount() {
    this.fetchGenresName()
  }

  fetchGenresName = async () => {
    try {
      const responseData = await categoryService.getCategoryGenres();
      this.setState({ genresName: Object.keys(responseData) });
    } catch (error) {
      console.error('Service Error:', error);
    }
  }

  fetchInfoSearch = async (genresOption, valueFind) => {
    try {
      const responseData = await SearchBookService.findInfoSearch(genresOption, valueFind);
      this.setState({ dataInfoSearch: responseData })
    }
    catch (error) {
      console.error('Service Error:', error);
    }
  }

  renderListGenresFind(genresName) {
    return (
      <DropdownButton id="dropdown-button-genres-find" className='dropdown-search' title={this.state.genresFind}>
        <Dropdown.Item onClick={() => this.handleGenresNameClick('Tất cả')}>Tất cả</Dropdown.Item>
        {Array.isArray(genresName) && genresName.map((genre, index) => (
          <Dropdown.Item key={index} onClick={() => this.handleGenresNameClick(genre)}>
            {genre}
          </Dropdown.Item>
        ))}
      </DropdownButton>

    )
  }

  renderSearchForm(dataInfoSearch) {
    return (
      <>
        <Form className="d-flex me-3 form-search">
          <FormControl type="search" placeholder="Bạn cần tìm gì?" className="search-input" aria-label="Search"
            onChange={(event) => this.handleValueFindClick(event)}
          />
          <Button className='btn-find' variant="outline-success">
            <i className="bi bi-search"></i>
          </Button>
          {dataInfoSearch && this.renderPanelContainSearch(dataInfoSearch)}
        </Form>

      </>
    )
  }

  renderPanelContainSearch(dataInfoSearch) {
    return (
      <>
      <ListGroup id='panel-contain-search'>
        <ListGroup.Item className='title' style={{
          color: '#f15c22',
          fontSize: '18px',
          fontWeight: 500,
          paddingLeft: '8px',
          paddingBottom: '10px'
        }}>Sản phẩm liên quan</ListGroup.Item>
        {dataInfoSearch && dataInfoSearch.map((dataBook, index) => {
          return (
            <ListGroup.Item key={index}>
              <CardProductSearch key={index} dataBook={dataBook}/>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      </>
    )
  }
  renderCartProduct(){
    const existing_idProductCartSelect = Utils.LocalStorageGetItem('idProductCartSelect') || [];
    const totalProductAdd = existing_idProductCartSelect.reduce((total, bookLocalStorage) => total + bookLocalStorage.numberBuy, 0);
    return(
      <>
      <Nav className='catory'>
      <i className="bi bi-cart"></i>
        <Nav.Link href={PATH.CART}>
          {
            totalProductAdd !==0?
            <> <span style={{ color:'#f15c22',fontSize:'13px' }}>{totalProductAdd}&nbsp;sản phẩm</span></>
            :
            <><span>Giỏ hàng&nbsp;(0)</span></>
          }
        </Nav.Link>
    </Nav>
      </>
    )
  }
  render() {
    const { genresName } = this.state
    const { dataInfoSearch } = this.state
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
              {this.renderListGenresFind(genresName)}
              {/* Search form */}
              {this.renderSearchForm(dataInfoSearch)}
            </div>
            {/* Hotline */}
            <div className="hot-line">
              <i className="bi bi-headset"></i>
              <span className="">
                <p className='txt-phone' style={{ color: "#eb7c26", fontWeight: 700 }}>0933 109 009</p>
                <p className="">Hot line</p>
              </span>
            </div>
            {/* Shopping cart */}
            {this.renderCartProduct()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderCenter;