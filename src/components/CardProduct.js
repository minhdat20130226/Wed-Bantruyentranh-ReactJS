import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import img from '../assets/image/weekbook_test.jpg'
import BuyDialog from './BuyDialog';
import Utils from '../constant/Utils';

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameCard: null
        };
    }

    handleMouseEnter = (nameCard) => {
        this.setState({ nameCard: nameCard });
    };

    handleMouseLeave = () => {
        this.setState({ nameCard: null });
    };
    render() {
        const { typeCard } = this.props
        const { dataBook } = this.props
        return (
            <>
                {dataBook &&
                    <Card className='card-product'
                        onMouseEnter={() => this.handleMouseEnter(typeCard)}
                        onMouseLeave={this.handleMouseLeave}
                    >
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
                                <span className='price'>{Utils.formatAmount(dataBook.newPrice)}
                                    <span class="cur">₫</span>
                                </span>
                                <span className='del-price'>{Utils.formatAmount(dataBook.price)}</span>
                                <span className='sale-off'>{dataBook.reductionRate}%</span>
                            </div>
                        </Card.Body>
                        {
                            (this.state.nameCard === typeCard && this.state.nameCard !== "WEEKBOOK") && <BuyDialog dataBook={dataBook} />
                        }
                    </Card>
                }
            </>
        );
    }
}

export default CardProduct;
