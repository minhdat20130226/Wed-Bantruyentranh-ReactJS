import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import imgTest from '../../assets/image/55c23d98-96ce-4478-9721-d0ee955c0070.jpg';
import BuyDialog from '../../components/BuyDialog';
import TopicGroupService from '../../servieces/TopicGroupService';
class TopicGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    renderCardTopic(nameCard, headerText, bookData, iconBackgroundClass,iconMainClass) {
        return (
          <Card
            className='it'
            onMouseEnter={() => this.handleMouseEnter(nameCard)}
            onMouseLeave={this.handleMouseLeave}
          >
            <Card.Header className=''>
              <h3 className='h5'>{headerText}</h3>
            </Card.Header>
            {bookData && (
              <div>
                <Card.Body>
                  <i className={iconBackgroundClass}>
                  {nameCard==="udInDayBook"?<span className=''>{bookData.reductionRate}%</span>:<i className={iconMainClass}></i>}
                  </i>
                  <Card.Link href="#">
                    {/* <Card.Img variant="top" src={bookData.photoUrl} /> */}
                    <Card.Img variant="top" src={imgTest} />
                  </Card.Link>
                  <Card.Text className='name'>{bookData.name}</Card.Text>
                </Card.Body>
                <Card.Text className='price'>
                  {bookData.price * (bookData.reductionRate / 100)}đ
                </Card.Text>
                <Card.Text className='del-price'>{bookData.price}</Card.Text>
              </div>
            )}
            {this.state.nameCard === nameCard && <BuyDialog data={bookData} />}
          </Card>
        );
      }
    render() {
        const { udInDayBook, maxIsLikeBook, popularBook, newBook } = this.state
        console.log('a', udInDayBook,
            'b', maxIsLikeBook,
            'c', popularBook,
            'd', newBook)
        return (
            <div className='topic-group'>
                <Container>
                    {this.renderCardTopic("udInDayBook", "Ưu đãi trong ngày", udInDayBook, "bi-circle-fill")}
                    {this.renderCardTopic("maxIsLikeBook", "SÁCH HAY", maxIsLikeBook, "bi-circle-fill","bi-hand-thumbs-up-fill")}
                    {this.renderCardTopic("popularBook", "Sản phẩm nổi bật", popularBook, "bi-circle-fill","bi-fire")}
                    {this.renderCardTopic("newBook", "SÁCH MỚI", newBook, "bi-circle-fill","bi-bookmark-star-fill")}
                </Container>
            </div>
        );
    }
}

export default TopicGroup;