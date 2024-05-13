
import React, { Component } from 'react';
import { Container, Button, Nav, Tab, Carousel, Link } from 'react-bootstrap';
import CardProduct from '../../../components/CardProduct';
import Spinner from 'react-bootstrap/Spinner';
import rankbook1 from '../../../assets/image/banner/rankbook1.png'
import rankbook2 from '../../../assets/image/banner/rankbook2.png'

import WeekBookService from '../../../servieces/WeekBookService';
import RankBookWeekService from '../../../servieces/RankBookWeekService';

class RankBookWeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recommendedBooks: null,
            comingSoonBooks: null
        }
    }
    componentDidMount() {
        this.fetchRecommendedBooks()
        this.fetchComingSoonBooks()

    }
    fetchRecommendedBooks = async () => {
        try {
            const recommendedBooks = await RankBookWeekService.getRecommendedBooks();
            this.setState({ recommendedBooks });
        } catch (error) {
            console.error('Error:', error);
        }
    };
    fetchComingSoonBooks = async () => {
        try {
            const comingSoonBooks = await WeekBookService.getAllComingSoonBook();
            this.setState({ comingSoonBooks });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    renderSessionWeekBook(nameSession, imgSession, lsBook) {
        return (
            <Container>
                <  Tab.Container id="left-tabs-`${nameSession}`" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-week-book'>
                        <Nav.Item className='r'>
                            <span>{nameSession}</span>
                        </Nav.Item >
                    </Nav>
                    <div className='wrapper-content-week'>
                        {lsBook ?
                            <>
                                <div className='l-img-week'>
                                    <Nav.Link href='/'>
                                        <img src={imgSession}></img>
                                    </Nav.Link>
                                </div>
                                <Tab.Content className='content-week-book'>
                                    <Tab.Pane eventKey="first">
                                        <Carousel interval={null}>
                                            {lsBook && lsBook.filter((_, index) => index % 6 === 0).map((book, index) => (
                                                <Carousel.Item key={index}>
                                                    {lsBook.slice(index, index + 6).map((bookk, cardIndex) => (
                                                        <CardProduct key={bookk.storiesBookDTO.id} typeCard={"RANKBOOK"} dataBook={bookk} />
                                                    ))}
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    </Tab.Pane>
                                </Tab.Content>

                            </> :
                            <Spinner animation="border" variant="success" />}
                    </div>

                    <div className='wrapbtn-rank-book'>
                        <Button className='btn-rank-book' variant="outline-danger" href='/'>Xem thêm ››</Button>
                    </div>
                </Tab.Container>
            </Container>
        )
    }


    render() {
        const { searchInWeek, recommendedBooks, comingSoonBooks } = this.state;
        // console.log('comingson ', comingSoonBooks)
        return (
            <>
                <div className='rank-week-book'>
                    {/* {this.renderSessionWeekBook("TÌM KIẾM NHIỀU TRONG TUẦN", img, searchInWeek)} */}
                    {this.renderSessionWeekBook("DANH MỤC ĐỀ CỬ", rankbook1, recommendedBooks)}
                    {this.renderSessionWeekBook("SẮP RA MẮT", rankbook2, comingSoonBooks)}
                </div>

            </>

        );

    }
}
export default RankBookWeek;