
import React, { Component } from 'react';
import { Container, Card, Nav, Tab, Carousel, Link } from 'react-bootstrap';
import CardProduct from '../../../components/CardProduct';

class WeekBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: 'home'
        };
    }
    handleSelect = (key) => {
        this.setState({ key });
    };
    render() {

        return (
            <>
                <div className='week-book'>
                    <Container>
                       
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                            <Nav variant="pills" className='nav-week-book'>
                                <Nav.Item className='r'>
                                    <span>SÁCH - TRUYỆN TRANH</span>
                                </Nav.Item >
                                <Nav.Item className='l hv'>
                                    <Nav.Link eventKey="first">Sách mới</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='l hv'>
                                    <Nav.Link eventKey="second">Sách sắp phát hành</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='l hv'>
                                    <Nav.Link eventKey="three">Sách bán chạy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='l view-more-link'>
                                    <Nav.Link href='/'>Xem thêm<i class="bi bi-caret-right-fill"></i></Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className='content-week-book'>
                                <Tab.Pane eventKey="first">
                                    <Carousel data-bs-theme="dark" interval={null}>
                                        <Carousel.Item>
                                            <CardProduct />
                                            <CardProduct />
                                            <CardProduct />
                                            <CardProduct />
                                            <CardProduct />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <CardProduct />
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Carousel data-bs-theme="dark" interval={null}>
                                      
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="three">
                                    <Carousel data-bs-theme="dark" interval={null}>
                                        <Carousel.Item>
                                            <CardProduct />
                                            <CardProduct />
                                            <CardProduct />
                                            <CardProduct />
                                            <CardProduct />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <CardProduct />
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>
                    </Container>
                </div>

            </>

        );

    }
}
export default WeekBook;