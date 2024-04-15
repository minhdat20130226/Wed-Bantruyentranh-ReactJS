import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


class BuyDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button variant="primary" onMouseEnter={this.handleShow}>
                    Launch demo modal
                </Button>
                <Modal show={this.state.show} onMouseLeave={this.handleClose}>
                    <Modal.Body>
                        <Modal.Title>Custom Modal Styling</Modal.Title>
                        <div className='des-txt'>
                            <p>
                                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                ipsam atque a dolores quisquam quisquam adipisci possimus
                                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                deleniti rem!
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
                                <i class="bi bi-heart-fill"></i>Thêm vào yêu thích
                            </Button>

                        </div>

                    </Modal.Body>

                </Modal>
            </>
        );
    }
}

export default BuyDialog;
