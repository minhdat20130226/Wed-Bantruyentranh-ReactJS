import React, { Component } from 'react';
import {Carousel, Container } from 'react-bootstrap';
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
      { nameIndex: 'ĐÓN ĐỌC', img: IMG1 },
      { nameIndex: 'TRUYỆN HAY TRONG TUẦN', img: IMG2 },
      { nameIndex: 'TRUYỆN MỚI', img: IMG1 },
      { nameIndex: 'QUÀ TẶNG', img: IMG1 },
    ];

    return (
      <div className='container-banner'>
        <Container>
        <div style={{width:'240px',marginRight:'10px'}}></div>
        <div className=''>
          <div className='main-slide' style={{ height: '320px' }}>
            <Carousel data-bs-theme="dark" controls={false} activeIndex={this.state.activeButtonIndex} onSelect={this.handleSlide}>
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index} interval={1000} style={{width: '880px'}}>
                  <Link className="nav-link" to={PATH.PROMOTIONPROGRAM} target='blank'>
                    <img className="d-block" src={item.img} alt={`Slide ${index + 1}`} />
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
