import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import imgTest from '../../assets/image/55c23d98-96ce-4478-9721-d0ee955c0070.jpg';
import BuyDialog from '../../components/BuyDialog';

class TopicGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverCardIndex: -1,
            position: {
                buyDialog: 0,
                cart: 0
            },
            isHovered: false,

        };
    }

    handleShowBuyDialog = (index) => {
        this.setState({ hoverCardIndex: index });
    }
    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }


    render() {
        return (
            <div className='topic-group'>
                <Container>
                    <Card
                        onMouseEnter={this.handleMouseEnter}
                    >
                        <Card.Header className=''>
                            <h3 className='h5'> Ưu đãi trong ngày </h3>
                        </Card.Header>
                        <Card.Body>
                            <i className="bi bi-circle-fill">
                                <span className=''>-36% </span>
                            </i>
                            <Card.Link href="#" onMouseEnter={() => this.handleShowBuyDialog(1)}>
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừng Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>
                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>
                    </Card>
                    <Card
                        onMouseEnter={this.handleMouseEnter}
                    >
                        <Card.Header className=''>
                            <h3 className='h5'> SÁCH HAY </h3>
                            <a href='/'>Xem thêm<i class="bi bi-caret-right-fill"></i></a>
                        </Card.Header>
                        <Card.Body>
                             <i class="bi bi-circle-fill">
                                <i class="bi bi-hand-thumbs-up-fill"></i>
                            </i>
                            <Card.Link href="#" onMouseEnter={() => this.handleShowBuyDialog(2)}>
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừng Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>
                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>
                    </Card>
                    <Card
                        onMouseEnter={this.handleMouseEnter}
                    >
                        <Card.Header className=''>
                            <h3 className='h5'> Sách phẩm nổ bật </h3>
                        </Card.Header>
                        <Card.Body>
                              <i class="bi bi-circle-fill">
                                <i class="bi bi-fire"></i>
                            </i>
                            <Card.Link href="#" onMouseEnter={() => this.handleShowBuyDialog(3)}>
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừng Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>
                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>
                    </Card>
                    <Card
                        onMouseEnter={this.handleMouseEnter}
                    >
                        <Card.Header className=''>
                            <h3 className='h5'> SÁCH MỚI </h3>
                            <a href='/'>Xem thêm<i class="bi bi-caret-right-fill"></i></a>
                        </Card.Header>
                        <Card.Body>
                            <i class="bi bi-circle-fill">
                                <i class="bi bi-bookmark-star-fill"></i>
                            </i>
                            <Card.Link href="#" onMouseEnter={() => this.handleShowBuyDialog(4)}>
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừng Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>
                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>
                    </Card>
                    {this.state.isHovered && (
                        <BuyDialog

                            alignLeftPosition={
                                this.state.hoverCardIndex === 1 ? 7 :
                                    (this.state.hoverCardIndex === 2 ? 29 :
                                        this.state.hoverCardIndex === 3 ? 51 : 71
                                    )
                            }
                        />
                    )}
                </Container>
            </div>
        );
    }
}

export default TopicGroup;
