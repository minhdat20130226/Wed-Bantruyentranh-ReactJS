import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import img from '../assets/image/weekbook_test.jpg'

class CardProduct extends Component {
    constructor(props) {
        super(props);

    }



    render() {


        return (
            <Card className='card-product'>
                <Card.Link className='img-product' href='#'  >
                    <Card.Img variant="top" src={img} href='#' />
                </Card.Link>

                <Card.Body>

                    <Card.Link href='#' className='title-product'>Combo 2 Tập Hay Vẽ Thì Vẽ Hay</Card.Link>
                    <Card.Text className='author-product'>Cynthia Kane</Card.Text>
                    <div className='price-group'>
                        <span className='price'>83,000
                            <span class="cur">₫</span></span>
                        <span className='del-price'>98,000</span>
                        <span className='sale-off'>-15%</span>

                    </div>

                </Card.Body>
            </Card>
        );
    }
}

export default CardProduct;
