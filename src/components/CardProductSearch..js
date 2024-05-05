import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import img from '../assets/image/weekbook_test.jpg'
import Utils from '../constant/Utils';

class CardProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { dataBook } = this.props
        return (
            <>
                {dataBook &&
                    <Card className='card-product-search'>
                        <Card.Link className='img-product' href='#' >
                            {/* <Card.Img variant="top" src={dataBook.photoUrl} href='#' /> */}
                            <Card.Img variant="top" src={img} href='#' />
                            <Card.Body>
                                <Card.Text href='#' className='title-product'>{dataBook.name}</Card.Text>
                                <div className='price-group'>
                                    <span className='price'>{Utils.formatAmount(dataBook.newPrice)}
                                        <span class="cur">₫</span>
                                    </span>
                                    <span className='del-price'>{Utils.formatAmount(dataBook.price)}₫</span>
                                </div>
                            </Card.Body>
                        </Card.Link>
                    </Card>
                }
            </>
        );
    }
}

export default CardProductSearch;
