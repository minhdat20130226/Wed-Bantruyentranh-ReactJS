import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Utils from '../constant/Utils';

class BuyDialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { typeSession } = this.props;
        const { dataBook } = this.props;
        return (
            <>
                <div
                    className='buy-dialog'
                    style={{left:'210px',top: typeSession !== 'TOPIC' ? '-20px' : '50px' }}>
                    <Card style={{display:'block'}}>     
                        {dataBook && <Card.Body>
                                <Card.Title className=''>{dataBook.name}</Card.Title>
                                <div className='des-txt'>
                                    <p>{dataBook.description}</p>
                                    <a href='#'>&nbsp;Xem thêm</a>
                                </div>
                                <div className='price-txt'>
                                    <span className='price'>{Utils.formatAmount(dataBook.newPrice)}đ</span>
                                    <span className='del-price'>{Utils.formatAmount(dataBook.price)}đ</span>
                                </div>
                                <div className='discount-percent'>
                                    <span className='percent-label'>Giảm giá&nbsp;</span>
                                    <span className='percent-txt'>{dataBook.reductionRate}%</span>
                                </div>
                                <div className='btn-g d-grid gap-2'>
                                    <Button variant="success">THÊM VÀO GIỎ HÀNG</Button>
                                    <Button variant="danger">MUA NGAY</Button>
                                    <Button className='btn-like' variant="outline-secondary">
                                        <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                                    </Button>
                                </div>
                            </Card.Body>}
                    </Card>
                </div>
            </>
        );
    }
}

export default BuyDialog;
