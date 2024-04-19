

import React, { Component } from 'react';
import {Container,ListGroup } from 'react-bootstrap';
import '../Footer/Footer.scss'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        return (
            <>
                <div className='footer'>
                    <Container >
                    <div className="footer-row">
                            <div className="support">
                                <h6>HỖ TRỢ KHÁCH HÀNG</h6>
                                <ListGroup>
                                    <ListGroup.Item><a href="tel:0933109009">Sản phẩm & Đơn hàng: 0933 109 009</a></ListGroup.Item>
                                    <ListGroup.Item><a href="tel:0989439986">Kỹ thuật & Bảo hành: 0989 439 986</a></ListGroup.Item>
                                    <ListGroup.Item><a href="tel:02838207153">Điện thoại: (028) 3820 7153 (giờ hành chính)</a></ListGroup.Item>
                                    <ListGroup.Item><a href="mailto:info@bookbuy.vn">Email: info@bookbuy.vn</a></ListGroup.Item>
                                    <ListGroup.Item>Địa chỉ: 9 Lý Văn Phức, Tân Định, Q1, TP.HCM</ListGroup.Item>
                                    <ListGroup.Item><a href="#">Sơ đồ đường đi</a></ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="help">
                                <h6>TRỢ GIÚP</h6>
                                <ListGroup>
                                    <ListGroup.Item><a href="#">Hướng dẫn mua hàng</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Phương thức thanh toán</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Phương thức vận chuyển</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Chính sách đổi - trả</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Chính sách bồi hoàn</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Câu hỏi thường gặp (FAQs)</a></ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="account">
                                <h6>TÀI KHOẢN CỦA BẠN</h6>
                                <ListGroup>
                                    <ListGroup.Item><a href="#">Cập nhật tài khoản</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Giỏ hàng</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Lịch sử giao dịch</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Sản phẩm yêu thích</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Kiểm tra đơn hàng</a></ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="bookbuy">
                                <h6>BOOKBUY</h6>
                                <ListGroup>
                                    <ListGroup.Item><a href="#">Giới thiệu bookbuy.vn</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">BookBuy trên Facebook</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Liên hệ BookBuy</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Đặt hàng theo yêu cầu</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Tích lũy BBxu</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">Proguide.vn - Kaspersky</a></ListGroup.Item>
                                    <ListGroup.Item><a href="#">iBookStop.vn</a></ListGroup.Item>
                                </ListGroup>
                            </div>
                    </div>
                    <div className='payment-box'>
                    <div className="payment-types">
                                <h6>Chấp nhận thanh toán : </h6>
                                <ListGroup horizontal>
                                    <ListGroup.Item className='visa-master'></ListGroup.Item>
                                    <ListGroup.Item className='onepay'></ListGroup.Item>
                                    <ListGroup.Item className='moca-pay'></ListGroup.Item>
                                </ListGroup>
                    </div>
                    <div className="social-networks">
                                <h6>Các phương tiện Social: </h6>
                                <ListGroup horizontal>
                                    <ListGroup.Item className='fb'><a href=''></a></ListGroup.Item>
                                    <ListGroup.Item className='zl'><a href=''></a></ListGroup.Item>
                                    <ListGroup.Item className='ins'><a href=''></a></ListGroup.Item>
                                    <ListGroup.Item className='tt'><a href=''></a></ListGroup.Item>
                                </ListGroup>
                    </div>
                    </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default Footer;
