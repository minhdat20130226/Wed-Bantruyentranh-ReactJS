
import React, { Component } from 'react';
import { Container, Nav, Tab, Carousel, Link } from 'react-bootstrap';
import CardProduct from '../../../components/CardProduct';
import Spinner from 'react-bootstrap/Spinner';
import { PATH } from '../../../utils/constant'
import WeekBookService from '../../../servieces/WeekBookService';

class WeekBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newBooks: null,
            comingSoonBooks: null,
            bestSellBooks: null
        };

    }
    handleSelect = (key) => {
        this.setState({ key })
    }

    componentDidMount() {
        this.fetchNewBooks()
        this.fetchComingSoonBooks()
        this.fetchBestSellBooks()

    }

    fetchNewBooks = async () => {
        try {
            const newBooks = await WeekBookService.getAllNewBook();
            this.setState({ newBooks: newBooks });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    fetchComingSoonBooks = async () => {
        try {
            const comingSoonBooks = await WeekBookService.getAllComingSoonBook();
            console.log("adw", comingSoonBooks)
            this.setState({ comingSoonBooks: comingSoonBooks });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    fetchBestSellBooks = async () => {
        try {
            const bestSellBooks = await WeekBookService.getAllBestSellBook();
            this.setState({ bestSellBooks: bestSellBooks });
        } catch (error) {
            console.error('Error:', error);
        }
    };
    renderCarousel(eventKey, typeCard, dataBook) {
        return (
            <Tab.Pane eventKey={eventKey}>
                <Carousel data-bs-theme="dark" interval={null}>
                   { dataBook?
                        dataBook.filter((_, index) => index % 5 === 0).map((book, index) => (
                            <Carousel.Item key={index}>
                                {dataBook.slice(index, index + 5).map((bookk, cardIndex) => (
                                    <CardProduct key={bookk.id} typeCard={typeCard} dataBook={bookk} />
                                ))}
                            </Carousel.Item>
                        )):
                        <Spinner animation="border" variant="success" />}
                </Carousel>
            </Tab.Pane>
        )
    }

    render() {
        const { newBooks, comingSoonBooks, bestSellBooks } = this.state;
        
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
                                    <Nav.Link href={PATH.SEARCHBOOKPAGE} >Xem thêm<i class="bi bi-caret-right-fill"></i></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className='content-week-book'>
                                {this.renderCarousel("first", "WEEKBOOK", newBooks)}
                                {this.renderCarousel("second", "WEEKBOOK", comingSoonBooks)}
                                {this.renderCarousel("three", "WEEKBOOK", bestSellBooks)}
                            </Tab.Content>

                        </Tab.Container>
                    </Container>
                </div>

            </>

        );

    }
}
export default WeekBook;