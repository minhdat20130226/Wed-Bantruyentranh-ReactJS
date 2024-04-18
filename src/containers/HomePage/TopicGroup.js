import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import imgTest from '../../assets/image/55c23d98-96ce-4478-9721-d0ee955c0070.jpg';
import BuyDialog from '../../components/BuyDialog';

class TopicGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverCardIndex: -1, // Chỉ số của thẻ Card đang được hover, -1 nếu không có thẻ nào được hover
           
        };
    }

    handleMouseEnter = (index, e) => {
        const rect = e.target.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        this.setState(prevState => ({
            hoverCardIndex: index,
          
        }));
    };

    handleMouseLeave = () => {
        this.setState({ hoverCardIndex: -1 });
    };

    render() {
        const { hoverCardIndex } = this.state;

        return (
            <div className='topic-group'>
                <Container>
                    {[...Array(4).keys()].map(index => (
                        <Card
                            key={index}
                            onMouseEnter={(e) => this.handleMouseEnter(index, e)}
                            onMouseLeave={this.handleMouseLeave}
                        >
                        <Card.Header className=''>
                            <h3 className='h5'> Ưu đãi trong ngày </h3>
                        </Card.Header>
                        <Card.Body>
                            <i className="bi bi-circle-fill">
                                <span className=''>-36% </span>
                            </i>
                            <Card.Link href="#" >
                                <Card.Img variant="top" src={imgTest} />
                            </Card.Link>
                            <Card.Text className='name'>Đừng Để Bản Thân Mắc Kẹt Trong Giấc Mơ Người Khác</Card.Text>
                        </Card.Body>
                        <Card.Text className='price'>350,000đ</Card.Text>
                        <Card.Text className='del-price'>540,000đ</Card.Text>
                        {hoverCardIndex === index && <BuyDialog />}
                        </Card>
                    ))}
                </Container>
            </div>
        );
    }
}

export default TopicGroup;