
import React, { Component } from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import imgTest from '../../assets/image/55c23d98-96ce-4478-9721-d0ee955c0070.jpg'
import BuyDialog from '../../components/BuyDialog';
class TopicGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBuyDialog: false,
            hoverCardIndex: null
        };
    }

    handleCloseBuyDialog() {
        this.setState({ showBuyDialog: false });
    }

    handleShowBuyDialog(index) {
        this.setState({ showBuyDialog: true, hoverCardIndex: index });
    }
    render() {
        const defaultPixelValues = [100, 200, 300, 400];

        
        return (
            
            <div className='topic-group'>
                <Container>
                    <Card  
                        onMouseLeave={() => this.handleCloseBuyDialog()}>
                    
                        <Card.Header className=''>
                           <h3 className='h5'> Ưu đãi trong ngày </h3>
                        </Card.Header>
                        <Card.Body>
                            <i class="bi bi-circle-fill">
                                <span className=''>-36% </span>
                            </i>
                            <Card.Link href="#" onMouseEnter={() => this.handleShowBuyDialog(1)}>
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừng Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>
                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>
                    
                        {/* {this.state.showBuyDialog && <BuyDialog showBuyDialog = {this.state.showBuyDialog} onHide={this.handleCloseBuyDialog} alignLeftPosition={200}/>} */}
                    </Card>
                    <Card className='it'  onMouseLeave={() => this.handleCloseBuyDialog()}>
                        <Card.Header>
                           <h3 className='h5'>SÁCH HAY</h3>
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
                    
                        {/* {this.state.showBuyDialog && <BuyDialog showBuyDialog = {this.state.showBuyDialog} onHide={this.handleCloseBuyDialog} alignLeftPosition={200}/>} */}
                    </Card>
                    <Card className='it' onMouseLeave={() => this.handleCloseBuyDialog()}>
                        <Card.Header className=''>
                           <h3 className='h5'>Sản phẩm nổi bật</h3>
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
                     
                        {/* {this.state.showBuyDialog && <BuyDialog showBuyDialog = {this.state.showBuyDialog} onHide={this.handleCloseBuyDialog} alignLeftPosition={200}/>} */}
                    </Card>
                    <Card className='it' onMouseLeave={() => this.handleCloseBuyDialog()}>
                        <Card.Header className=''>
                           <h3 className='h5'>SÁCH MỚI</h3>
                           <a href='/'>Xem thêm<i class="bi bi-caret-right-fill"></i></a>
                        </Card.Header>
                        <Card.Body>
                            <i class="bi bi-circle-fill">
                                <i class="bi bi-bookmark-star-fill"></i>
                            </i>
                            <Card.Link href="#" onMouseEnter={() => this.handleShowBuyDialog(4)}>
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừngipsam atque a dolores quisquam quisquam adipisci possimus
                                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                reiciendis porro quo magn Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>

                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>
                         
                        {/* {this.state.showBuyDialog && <BuyDialog showBuyDialog = {this.state.showBuyDialog} onHide={this.handleCloseBuyDialog} alignLeftPosition={200}/>} */}
                    </Card>
                       {this.state.showBuyDialog &&  <BuyDialog
                        showBuyDialog={this.state.showBuyDialog}
                        onHide={() => this.handleCloseBuyDialog()}
                        alignLeftPosition=
                        {this.state.hoverCardIndex === 1 ? 340 : 
                        (this.state.hoverCardIndex === 2 ? 670 : 
                        this.state.hoverCardIndex === 3 ? 1000 : 1280)}
                    />}
                </Container>
 
      

            </div>
        );

    }
}
export default TopicGroup;