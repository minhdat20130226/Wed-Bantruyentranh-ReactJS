import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Card } from 'react-bootstrap';
import imgTest from '../../assets/image/55c23d98-96ce-4478-9721-d0ee955c0070.jpg';
import BuyDialog from '../../components/BuyDialog';
import TopicGroupService from '../../servieces/TopicGroupService';
import Utils from '../../constant/Utils';

class TopicGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            nameCard: null,
            udInDayBook: null,
            maxIsLikeBook: null,
            popularBook: null,
            newBook: null
        };
    }

    handleMouseEnter = (nameCard) => {
        this.setState({nameCard:nameCard});
    };

    handleMouseLeave = () => {
        this.setState({nameCard:null});
    };



    componentDidMount() {
        this.fetchUdInDayBook()
        this.fetchMaxIsLikeBook()
        this.fetchPopularBook()
        this.fetchNewBook()
    }

    fetchUdInDayBook = async () => {
        try {
            const udInDayBook = await TopicGroupService.getUdInDayBook();
            this.setState({ udInDayBook: udInDayBook })
        }
        catch (error) {
            console.error('Error:', error);
        }

    }
    fetchMaxIsLikeBook = async () => {
        try {
            const maxIsLikeBook = await TopicGroupService.getMaxIsLikeBook();
            this.setState({ maxIsLikeBook: maxIsLikeBook })
        }
        catch (error) {
            console.error('Error:', error);
        }

    }
    fetchPopularBook = async () => {
        try {
            const popularBook = await TopicGroupService.getPopularBook();
            this.setState({ popularBook: popularBook })
        }
        catch (error) {
            console.error('Error:', error);
        }

    }
    fetchNewBook = async () => {
        try {
            const newBook = await TopicGroupService.getNewBook();
            this.setState({ newBook: newBook })
        }
        catch (error) {
            console.error('Error:', error);
        }

    } 
    renderCardTopic(key,nameCard, headerText, dataBook, iconBackgroundClass,iconMainClass,seeMore) {
        return (
            <>
            {dataBook? <Card className={key!==1?'it':''}>
            <Card.Header className=''>
              <h3 className='h5'>{headerText}</h3>
               {seeMore && <Card.Link href="/">{seeMore}</Card.Link>}
            </Card.Header>
            {dataBook && (
              <div   onMouseEnter={() => this.handleMouseEnter(nameCard)}
            onMouseLeave={this.handleMouseLeave}>
                <Card.Body>
                  <i className={iconBackgroundClass}>
                  {nameCard==="udInDayBook"?<span className=''>{dataBook.reductionRate}%</span>:<i className={iconMainClass}></i>}
                  </i>
                  <Card.Link href="#">
                    {/* <Card.Img variant="top" src={dataBook.photoUrl} /> */}
                    <Card.Img variant="top" src={imgTest} />
                  </Card.Link>
                  <Card.Text className='name'>{dataBook.name}</Card.Text>
                </Card.Body>
                <Card.Text className='price'>
                {Utils.formatAmount(dataBook.newPrice)}đ
                </Card.Text>
                <Card.Text className='del-price'>{Utils.formatAmount(dataBook.price)}đ</Card.Text>
                {this.state.nameCard === nameCard && <BuyDialog dataBook={dataBook} typeSession={"TOPIC"}/>}
              </div>
            )}
            </Card> : <Spinner animation="border" variant="success"/>}
         
            </>
        );
       
      }
    render() {
        const { udInDayBook, maxIsLikeBook, popularBook, newBook } = this.state
        // console.log('a', udInDayBook,
        //     'b', maxIsLikeBook,
        //     'c', popularBook,
        //     'd', newBook)
        return (
            <div className='topic-group'>
                <Container>
                    {this.renderCardTopic(1,"udInDayBook", "Ưu đãi trong ngày", udInDayBook, "bi-circle-fill")}
                    {this.renderCardTopic(2,"maxIsLikeBook", "SÁCH HAY", maxIsLikeBook, "bi-circle-fill","bi-hand-thumbs-up-fill","Xem thêm")}
                    {this.renderCardTopic(3,"popularBook", "Sản phẩm nổi bật", popularBook, "bi-circle-fill","bi-fire")}
                    {this.renderCardTopic(4,"newBook", "SÁCH MỚI", newBook, "bi-circle-fill","bi-bookmark-star-fill","Xem thêm")}
                </Container>
            </div>
        );
    }
}

export default TopicGroup;