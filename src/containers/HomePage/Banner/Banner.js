import React, { Component } from 'react';
import {Carousel, Container,Image } from 'react-bootstrap';
import IMG1 from '../../../assets/image/55c23d98-96ce-4478-9721-d0ee955c0070.jpg';
import IMG2 from '../../../assets/image/ghg.jpg';
import { Link } from 'react-router-dom';
 import { PATH } from '../../../utils/constant';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButtonIndex: 0 // Mặc định là button đầu tiên
    }; 
  }

  handleSlide = (selectedIndex, e) => {
    this.setState({ activeButtonIndex: selectedIndex }); // Cập nhật trạng thái vị trí của button được kích hoạt
  };

  handleSpanClick = (index) => {
    this.setState({ activeButtonIndex: index }); // Cập nhật trạng thái vị trí của button tương ứng với span được click
  };


  render() {
    const carouselItems = [
      { nameIndex: 'SẢN PHẨM MỚI', img: "https://bookbuy.vn/Res/Images/Album/55c23d98-96ce-4478-9721-d0ee955c0070.jpg?w=880&scale=both&h=320&mode=crop" },
      { nameIndex: 'ĐÓN ĐỌC', img: "https://bookbuy.vn/Res/Images/Album/2c7fe663-f09b-41fd-b367-4a484ad8bbae.jpg?w=880&scale=both&h=320&mode=crop" },
      { nameIndex: 'TRUYỆN HAY TRONG TUẦN', img: "https://bookbuy.vn/Res/Images/Album/30172f9f-bd3a-48b3-9ec5-c7a110607a14.jpg?w=880&scale=both&h=320&mode=crop" },
      { nameIndex: 'TRUYỆN MỚI', img: "https://bookbuy.vn/Res/Images/Album/d425cbf2-4fbf-49c0-8b5c-f3f14bc10992.jpg?w=880&scale=both&h=320&mode=crop" },
      { nameIndex: 'QUÀ TẶNG', img: "https://bookbuy.vn/Res/Images/Album/3dc9db62-b9b6-4f44-a584-c67eaa332c31.jpg?w=880&scale=both&h=320&mode=crop" },
    ];

    return (
      <div className='container-banner'>
        <Container>
        <div style={{width:'240px',marginRight:'10px',backgroundColor:'#fff'}}></div>
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
