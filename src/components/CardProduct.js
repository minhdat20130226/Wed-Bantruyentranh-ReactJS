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

                    >
                        <Card.Link className='img-product' href='#'
                         onMouseEnter={() => this.handleMouseEnter(typeCard)}
                         onMouseLeave={this.handleMouseLeave}
                        >
                            {/* <Card.Img variant="top" src={dataBook.photoUrl} href='#' /> */}
                            <Card.Img variant="top" src={img} href='#'/>
                            {(this.state.nameCard === typeCard && this.state.nameCard !== "WEEKBOOK") && <BuyDialog dataBook={dataBook} />}
                        </Card.Link>
                        <Card.Body>
                            <Card.Link href='#' className='title-product'>{dataBook.storiesBookDTO.name}</Card.Link>
                            <Card.Text className='author-product'>
                                {dataBook.storyAuthorName}
                            </Card.Text>
                            <div className='price-group'>
                                <span className='price'>{Utils.formatAmount(dataBook.storiesBookDTO.newPrice)}
                                    <span className="cur">₫</span>
                                </span>
                                <span className='del-price'>{Utils.formatAmount(dataBook.storiesBookDTO.price)}</span>
                                <span className='sale-off'>{dataBook.reductionRate}%</span>
                            </div>
                        </Card.Body>
                       
                    </Card>
                }
            </>
        );
    }
}

export default CardProduct;
