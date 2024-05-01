
import React, { Component } from 'react';
import { Container, Button, Nav, Tab, Carousel, Link } from 'react-bootstrap';
import CardProduct from '../../../components/CardProduct';
import img from '../../../assets/image/rank-week.jpg'
import BuyDialog from '../../../components/BuyDialog';
class RankBookWeek extends Component {
    constructor(props) {
        super(props)
      
    }

    render() {
        const {nameSession} = this.props;
        return (
            <>
                <div className='rank-week-book'>
                    <Container>

                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                            <Nav variant="pills" className='nav-week-book'>
                                <Nav.Item className='r'>
                                    <span>{nameSession}</span>
                                </Nav.Item >

                            </Nav>

                            <div className='wrapper-content-week'>
                                <div className='l-img-week'>
                                    <Nav.Link href='/'>
                                        <img src={img}></img>
                                    </Nav.Link>
                                </div>
                                <Tab.Content className='content-week-book'>
                                <Tab.Pane eventKey="first">
                                <Carousel interval={null}>
                                    <Carousel.Item>
                                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                            <CardProduct key={index} visibleCardBuy={"RANKBOOK"} positionTop={index < 3 ? -6 : -70} />
                                        ))}
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        {[1, 2].map((_, index) => (
                                             <CardProduct key={index} visibleCardBuy={"RANKBOOK"} positionTop={index < 3 ? -6 : -70} />
                                        ))}
                                    </Carousel.Item>
                                </Carousel>
                            </Tab.Pane>

                            
                                </Tab.Content>

                            </div>

                        </Tab.Container>
                      <div className='wrapbtn-rank-book'>
                        <Button className='btn-rank-book' variant="outline-danger" href='/'>Xem thêm ››</Button>
                      </div>
                        
                    </Container>
                </div>

            </>

        );

    }
}
export default RankBookWeek;