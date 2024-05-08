import React, { Component } from 'react';
import { Carousel, Container, Image, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PATH } from '../../../utils/constant';
import categoryService from '../../../servieces/categoryService';

const positionTop = [0, -42, -84, -126, -168, -210, -252, -294];
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButtonIndex: 0,
      showMenu: false,
      hoveredDanhMuc: null,
      categoryGenresData: {},
      dataGenre: {},

    };
  }
  handleMouseEnter = (tenDanhMuc) => {

    this.setState({
      showMenu: true,
      hoveredDanhMuc: tenDanhMuc
    });
  }

  handleMouseLeave = () => {
    this.setState({
      showMenu: false,
      hoveredDanhMuc: null
    });
  }

  async componentDidMount() {
    const currentPath = window.location.pathname;
    const showNavbar = currentPath === PATH.HOME;
    this.setState({ showNavbar });
    try {
      const responseData = await categoryService.getCategoryGenres();
      this.setState({ categoryGenresData: responseData });
    } catch (error) {
      console.error('Service Error:', error);
    }
  }

  handleItemClick = (genre) => {
    try {
      const pathSub = genre.replace(/\s+/g, "-");
      const navigate = this.props.navigate;
      navigate(`${PATH.SEARCHBOOKPAGE}/${pathSub}`, { state: { dataGenre: "qưe" } });
    } catch (error) {
      console.error('Error data:', error)
    }
  }
  handleSlide = (selectedIndex, e) => {
    this.setState({ activeButtonIndex: selectedIndex }); // Cập nhật trạng thái vị trí của button được kích hoạt
  };

  handleSpanClick = (index) => {
    this.setState({ activeButtonIndex: index }); // Cập nhật trạng thái vị trí của button tương ứng với span được click
  };

  renderCategory(danh_muc, categoryGenresData) {
    return (
      <>
        {danh_muc.map((danh_muc, index) => (
          <DropdownButton
            key={index}
            id={`dropdown-${danh_muc}-button`}
            className="item"
            drop="end"
            href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}`}
            title={danh_muc}
            show={this.state.showMenu && this.state.hoveredDanhMuc === danh_muc}
            onMouseEnter={() => this.handleMouseEnter(danh_muc)}
            onMouseLeave={this.handleMouseLeave}
          // onClick={() => this.handleItemClick(danh_muc)}
          >
            <div className="menu-box-item" style={{ display: 'flex', top: `${positionTop[index]}px` }}>
              <div>
                <Dropdown.Header>Nổi bật</Dropdown.Header>
                {categoryGenresData[danh_muc].slice(0, 7).map((item, index) => (
                  <Dropdown.Item key={index} as='a' href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}/${item.storyAuthorName.replace(/\s+/g, "-")}`}>{item.storyAuthorName}</Dropdown.Item>
                ))}
              </div>
              <div>
                <Dropdown.Header>Dịch giả</Dropdown.Header>
                {categoryGenresData[danh_muc].slice(0, 6).map((item, index) => (
                  <Dropdown.Item key={index} as='a' href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}/${item.storyTranslatorName.replace(/\s+/g, "-")}`}>{item.storyTranslatorName}</Dropdown.Item>
                ))}
              </div>
              <div>
                <Dropdown.Header>Nhà xuất bản</Dropdown.Header>
                {categoryGenresData[danh_muc].slice(0, 7).map((item, index) => (
                  <Dropdown.Item key={index} as='a' href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}/${item.placePublicationName.replace(/\s+/g, "-")}`}>{item.placePublicationName}</Dropdown.Item>
                ))}
              </div>
              <div>
                <Dropdown.Header>Tác giả</Dropdown.Header>
                {categoryGenresData[danh_muc].slice(0, 6).map((item, index) => (
                  <Dropdown.Item key={index} as='a' href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}/${item.storyAuthorName.replace(/\s+/g, "-")}`}>{item.storyAuthorName}</Dropdown.Item>
                ))}
              </div>
            </div>
          </DropdownButton>
        ))}
      </>
    )
  }





  render() {
    const carouselItems = [
      { nameIndex: 'SẢN PHẨM MỚI', img: "https://bookbuy.vn/Res/Images/Album/55c23d98-96ce-4478-9721-d0ee955c0070.jpg?w=880&scale=both&h=320&mode=crop" },
      { nameIndex: 'ĐÓN ĐỌC', img: "https://bookbuy.vn/Res/Images/Album/2c7fe663-f09b-41fd-b367-4a484ad8bbae.jpg?w=880&scale=both&h=320&mode=crop" },
      { nameIndex: 'TRUYỆN HAY TRONG TUẦN', img: "https://bookbuy.vn/Res/Images/Album/30172f9f-bd3a-48b3-9ec5-c7a110607a14.jpg?w=880&scale=both&h=320&mode=crop" },
      { nameIndex: 'TRUYỆN MỚI', img: "https://bookbuy.vn/Res/Images/Album/d425cbf2-4fbf-49c0-8b5c-f3f14bc10992.jpg?w=880&scale=both&h=320&mode=crop" },
      { nameIndex: 'QUÀ TẶNG', img: "https://bookbuy.vn/Res/Images/Album/3dc9db62-b9b6-4f44-a584-c67eaa332c31.jpg?w=880&scale=both&h=320&mode=crop" },
    ];
    const { categoryGenresData } = this.state;
    const danh_muc = Object.keys(categoryGenresData);
    return (
      <div className='container-banner'>
        <Container>
          <div className='menu-product'>
            {this.renderCategory(danh_muc, categoryGenresData)}
          </div>
          <div className=''>
            <div className='main-slide'>
              <Carousel data-bs-theme="dark" controls={false} activeIndex={this.state.activeButtonIndex} onSelect={this.handleSlide} direction="prev">
                {carouselItems.map((item, index) => (
                  <Carousel.Item key={index} interval={1200} >
                    <Link className="nav-link" to={PATH.PROMOTIONPROGRAM} target='blank'>
                      {/* <img className="d-block" src={item.img} alt={`Slide ${index + 1}`} /> */}
                      <Image className="d-block" src={item.img} alt={`Slide ${index + 1}`}></Image>
                    </Link>
                  </Carousel.Item>
                ))}
              </Carousel>

            </div>
            <div className='control-silde'>
              {carouselItems.map((item, index) => (
                <span key={index} className={index === this.state.activeButtonIndex ? 'active' : ''} onClick={() => this.handleSpanClick(index)}>
                  {item.nameIndex}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Banner;
