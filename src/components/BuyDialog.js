import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Card, } from 'react-bootstrap';

class BuyDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false // Trạng thái của con trỏ chuột
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    render() {
        const { positionTop, alignLeftPosition } = this.props;
        return (
            <>
                <div
                    className='buy-dialog'
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    style={{
                        left: `${alignLeftPosition}%`
                    }}
                >
                    <Card

                        style={{
                            display: `${true? 'block' : 'block'}`,
                            left: `${225}px`,
                            top: `${positionTop}px`
                        }}
                    >
                        <Card.Body>
                            <Card.Title className=''>Custom Modal Styling</Card.Title>
                            <div className='des-txt'>
                                <p>
                                    Cọ Stylus SilStar BuTouch Professional Hàn Quốc Tương Thích Android, iOS Butouch là thương hiệu cọ stylus của hãng SilStar (Hàn Quốc) với sứ mệnh mang lợi ích của vẽ
                                    tranh kỹ thuật số (digital painting) đến mọi ngườCọ Stylus SilStar BuTouch Professional Hàn Quốc Tương Thích Android, iOS Butouch là thương hiệu cọ stylus của hãng SilStar
                                    (Hàn Quốc) với sứ mệnh mang lợi ích của vẽ tranh kỹ thuật số (digital painting) đến mọi người, bất kể tuổi tác hay cấp độ sử dụng. Từ Năm 2013i, bất kể tuổi tác hay cấp độ sử dụng. Từ Năm 2013
                                </p>
                                <a href='#'>Xem thêm</a>
                            </div>
                            <div className='price-txt'>
                                <span className='price'>350,000đ</span>
                                <span className='del-price'>540,000đ</span>
                            </div>
                            <div className='discount-percent'>
                                <span className='percent-label'>Giảm giá</span>
                                <span className='percent-txt'>36 %</span>
                            </div>
                            <div className='btn-g d-grid gap-2'>
                                <Button variant="success">THÊM VÀO GIỎ HÀNG</Button>
                                <Button variant="danger">MUA NGAY</Button>
                                <Button className='btn-like' variant="outline-secondary">
                                    <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
}

export default BuyDialog;
