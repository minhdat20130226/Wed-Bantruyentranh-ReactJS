import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import img from '../assets/image/weekbook_test.jpg'
import BuyDialog from './BuyDialog';

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBuyDialog: false,
            dialogPosition: { x: 0, y: 0 } // Vị trí mặc định của BuyDialog
        };
    }

    handleMouseEnter = (e) => {
        // Lấy tọa độ tương đối của CardProduct
        const rect = e.target.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Cập nhật vị trí của BuyDialog và hiển thị nó
        this.setState({ showBuyDialog: true, dialogPosition: { x: mouseX, y: mouseY } });
    };

    handleMouseLeave = () => {
        // Ẩn BuyDialog khi chuột rời khỏi CardProduct
        this.setState({ showBuyDialog: false });
    };
    renderDialog(yourVariable, positionTop) {
        switch (yourVariable) {
            case "WEEKBOOK": return null;
            case "RANKBOOK": return <BuyDialog positionTop={positionTop} />;

        }
    }
    render() {
        const { showBuyDialog } = this.state
        const { visibleCardBuy, positionTop } = this.props
        const { dataBook } = this.props
        return (
            <>
                {dataBook &&
                    <Card className='card-product' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <Card.Link className='img-product' href='#'>
                        {/* <Card.Img variant="top" src={dataBook.photoUrl} href='#' /> */}
                            <Card.Img variant="top" src={img} href='#' />
                        </Card.Link>
                        <Card.Body>
                            <Card.Link href='#' className='title-product'>{dataBook.name}</Card.Link>
                            <Card.Text className='author-product'>
                            {dataBook.authorList.map(author => author.name).join(' ')}
                                </Card.Text>
                            <div className='price-group'>
                                <span className='price'>{dataBook.price}
                                    <span class="cur">₫</span>
                                </span>
                                <span className='del-price'>{dataBook.price*dataBook.reductionRate}</span>
                                <span className='sale-off'>{dataBook.reductionRate}%</span>
                            </div>
                        </Card.Body>
                        {
                            showBuyDialog ? this.renderDialog(visibleCardBuy, positionTop) : <></>

                        }
                    </Card>
                }
            </>
        );
    }
}

export default CardProduct;
