import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Card, } from 'react-bootstrap';

class BuyDialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        console.log(data)
        return (
            <>
                <div
                    className='buy-dialog'
                    style={{left:'210px'}}>
                    <Card style={{display:'block'}}>
                        <Card.Body>
                            <Card.Title className=''>{data.name}</Card.Title>
                            <div className='des-txt'>
                                <p>{data.description}</p>
                                <a href='#'>Xem thêm</a>
                            </div>
                            <div className='price-txt'>
                                <span className='price'>{data.price*(data.reductionRate/100)}đ</span>
                                <span className='del-price'>{data.price}đ</span>
                            </div>
                            <div className='discount-percent'>
                                <span className='percent-label'>Giảm giá</span>
                                <span className='percent-txt'>{data.reductionRate}%</span>
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
