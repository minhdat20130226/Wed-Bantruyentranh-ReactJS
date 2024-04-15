
import React, { Component } from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import imgTest from '../../assets/image/55c23d98-96ce-4478-9721-d0ee955c0070.jpg'
import BuyDialog from '../../components/BuyDialog';
class TopicGroup extends Component {
    constructor(props) {
        super(props);
    }

      
    render() {

        return (
            <div className='topic-group'>
                <Container>
                    <Card>
                        <Card.Header className=''>
                           <h3 className='h5'> Ưu đãi trong ngày </h3>
                        </Card.Header>
                        <Card.Body>
                            <i class="bi bi-circle-fill">
                                <span className=''>-36% </span>
                            </i>
                            <Card.Link href="#">
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừng Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>

                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>

                    </Card>
                    <Card className='it'>
                        <Card.Header className=''>
                           <h3 className='h5'>SÁCH HAY</h3>
                        </Card.Header>
                        <Card.Body>
                            <i class="bi bi-circle-fill">
                                <i class="bi bi-hand-thumbs-up-fill"></i>
                            </i>
                            <Card.Link href="#">
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừng Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>

                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>

                    </Card>
                    <Card className='it'>
                        <Card.Header className=''>
                           <h3 className='h5'>Sản phẩm nổi bật</h3>
                        </Card.Header>
                        <Card.Body>
                            <i class="bi bi-circle-fill">
                                <i class="bi bi-fire"></i>
                            </i>
                            <Card.Link href="#">
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừng Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>

                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>

                    </Card>
                    <Card className='it'>
                        <Card.Header className=''>
                           <h3 className='h5'>SÁCH MỚI</h3>
                        </Card.Header>
                        <Card.Body>
                            <i class="bi bi-circle-fill">
                                <i class="bi bi-bookmark-star-fill"></i>
                            </i>
                            <Card.Link href="#">
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừngipsam atque a dolores quisquam quisquam adipisci possimus
                                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                reiciendis porro quo magn Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>

                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>

                    </Card>
                    {/* <BuyDialog/> */}
                </Container>
 
      

            </div>
        );

    }
}
export default TopicGroup;