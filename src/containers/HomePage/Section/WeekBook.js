
import React, { Component } from 'react';
import { Container, Card, Nav, Tab, Carousel, Link } from 'react-bootstrap';
import CardProduct from '../../../components/CardProduct';
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
                console.log("adw",comingSoonBooks)
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
                                <Tab.Pane eventKey="first">
                                    <Carousel data-bs-theme="dark" interval={null}>
                                        {newBooks && newBooks.filter((_, index) => index % 5 === 0).map((book, index) => (
                                            <Carousel.Item key={index}>
                                                {newBooks.slice(index, index + 5).map((bookk, cardIndex) => (
                                                    <CardProduct key={cardIndex} visibleCardBuy={"WEEKBOOK"} dataBook={bookk} />
                                                ))}
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Carousel data-bs-theme="dark" interval={null}>
                                    {comingSoonBooks && comingSoonBooks.filter((_, index) => index % 5 === 0).map((book, index) => (
                                            <Carousel.Item key={index}>
                                                {comingSoonBooks.slice(index, index + 5).map((bookk, cardIndex) => (
                                                    <CardProduct key={cardIndex} visibleCardBuy={"WEEKBOOK"} dataBook={bookk} />
                                                ))}
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="three">
                                    <Carousel data-bs-theme="dark" interval={null}>
                                    {bestSellBooks && bestSellBooks.filter((_, index) => index % 5 === 0).map((book, index) => (
                                            <Carousel.Item key={index}>
                                                {bestSellBooks.slice(index, index + 5).map((bookk, cardIndex) => (
                                                    <CardProduct key={cardIndex} visibleCardBuy={"WEEKBOOK"} dataBook={bookk} />
                                                ))}
                                            </Carousel.Item>
                                        ))}
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